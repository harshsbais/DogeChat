import React, { useState, useEffect, useRef } from 'react'
import { read_cookie, bake_cookie } from 'sfcookies';
import Chat from './Chat';
import './Chat.css'
import db from "../../firebase.js";
import { storage } from "../../firebase.js";
import { useSelector, useDispatch } from 'react-redux';
import { getUserInfo, getUserId } from '../../Redux/UserInfo/userActions'
import { toastOpen, toastData, toastColor } from '../../Redux/Toast/toastActions'
import { loginModal, signupModal } from '../../Redux/Modal/modalActions';
function ChatContainer() {
    const dispatch = useDispatch();
    const username = useSelector(state => state.user.name)
    const userId = useSelector(state => state.user.id)
    const [message, setMessage] = useState({});
    const [messages, setMessages] = useState([]);
    const msgEnd = useRef(null);
    const msgBox = useRef(null);
    const scroll = useRef(true);
    const [image, setImage] = useState(null);
    const setMsg = () => {
        db.collection("messages")
            .orderBy("time", "asc")
            .onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            }
            )
    }
    const delMsg = (msg) => {
        scroll.current = false;
        var jobskill_query = db.collection('messages').where('time', '==', msg.time);
        jobskill_query.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                doc.ref.delete();
            });
        });
        if (msg.url) {
            let imgRef = storage.ref().child(`images/${msg.time}.png`);
            imgRef.delete().then(() => {
                console.log('deleted')
            }).catch((error) => {
                console.log(error)
            });
        }
    }
    const likeMsg = (id, claps) => {
        let likes;
        scroll.current = false;
        let is_there = false;
        likes = read_cookie('likes');
        let len = likes.length;
        likes = likes.filter(like => like !== id);
        is_there = len > likes.length ? true : false;
        if (!is_there)
            likes.push(id);
        var jobskill_query = db.collection('messages').where('time', '==', id);
        jobskill_query.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                doc.ref.update({
                    "clap": is_there ? claps - 1 : claps + 1
                })
            })
        });
        bake_cookie('likes', likes);
    }
    useEffect(() => {
        if (scroll?.current) {
            msgEnd?.current.scrollIntoView({ behavior: "auto" });
            msgBox?.current.focus();
        }
    }, [messages])
    useEffect(() => {
        if (read_cookie('userID').length !== 0 && read_cookie('userName').length !== 0 && read_cookie('password').length !== 0) {
            dispatch(getUserInfo(read_cookie('userName')));
            dispatch(getUserId(read_cookie('userID')));
            dispatch(loginModal(true));
        }
        else
            dispatch(signupModal(true));
        setMsg();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value });
    }
    const handleImageSelect = (e) => {
        if (e.target.files[0]) {
            dispatch(toastOpen(true));
            dispatch(toastData(`${e.target.files[0].name} uploaded`));
            dispatch(toastColor("green"));
            setImage(e.target.files[0]);
        }
    }
    const upload = (time, url) => {
        let mess = message;
        mess.time = time;
        mess.name = username;
        mess.userID = userId;
        if (url)
            mess.url = url;
        setMessage(mess);
        db.collection("messages").add(message);
        let msg = messages;
        msg.push(mess);
        scroll.current = true;
        setMessage({});
        setImage(null);
        setMessages(msg);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let time = new Date().getTime().toString();
        if (image) {
            dispatch(toastOpen(true));
            dispatch(toastData("Uploading Image"));
            dispatch(toastColor("green"));
            const uploadTask = storage.ref(`images/${time}.png`).put(image);
            uploadTask.on(
                "state_changed",
                snapshot => { },
                error => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref("images")
                        .child(`${time}.png`)
                        .getDownloadURL()
                        .then(url => {
                            if (url)
                                upload(time, url);
                        });
                }
            );
        }
        else
            upload(time);
    }
    return (
        <>
            <Chat
                handleImageSelect={handleImageSelect}
                messages={messages}
                msgEnd={msgEnd}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                msgBox={msgBox}
                message={message}
                setMessage={setMessage}
                delMsg={delMsg}
                likeMsg={likeMsg} />
        </>
    )
}

export default ChatContainer
