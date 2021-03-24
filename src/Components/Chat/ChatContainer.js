import React, { useState, useEffect, useRef } from 'react'
import { read_cookie, bake_cookie } from 'sfcookies';
import Chat from './Chat';
import './Chat.css'
import db from "../../firebase.js";
import { storage } from "../../firebase.js";
function ChatContainer() {
    const [signupModalShow, setSignupModalShow] = useState(false);
    const [loginModalShow, setLoginModalShow] = useState(false);
    const [message, setMessage] = useState({});
    const [messages, setMessages] = useState([]);
    const [emojiPicker, setEmojiPicker] = useState(false);
    const { content } = message;
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
    const delMsg = (id) => {
        scroll.current = false;
        var jobskill_query = db.collection('messages').where('time', '==', id);
        jobskill_query.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                doc.ref.delete();
            });
        });
        var imgRef = storage.ref().child(`images/${id}.png`);
        imgRef.delete().then(() => {
            console.log('deleted')
        }).catch((error) => {
            console.log(error)
        });

    }
    const likeMsg = (id, claps) => {
        var likes;
        scroll.current = false;
        var is_there = false;
        if (!read_cookie('likes')) {
            likes = [];
            bake_cookie('likes', likes);
        }
        else
            likes = read_cookie('likes');
        likes.map((like, idx) => {
            if (like === id) {
                is_there = true;
                likes.splice(idx, 1);
            }
            return null;
        })
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
        msgBox?.current.focus();
        if (scroll?.current)
            msgEnd?.current.scrollIntoView({ behavior: "auto" });
    }, [messages])
    useEffect(() => {
        if (read_cookie('userID').length !== 0 && read_cookie('userName').length !== 0 && read_cookie('password').length !== 0)
            setLoginModalShow(true);
        else
            setSignupModalShow(true);
        setMsg();
    }, []);
    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value });
    }
    const handleImageSelect = (e) => {
        console.log(e.target.files[0])
        if (e.target.files[0])
            setImage(e.target.files[0]);
    }
    console.log("image: ", image);
    const handleSubmit = (e) => {
        e.preventDefault();
        let img_add;
        let mess = message;
        mess.time = new Date().getTime().toString();
        if (image) {
            const uploadTask = storage.ref(`images/${mess.time}.png`).put(image);
            uploadTask.on(
                "state_changed",
                snapshot => { },
                error => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref("images")
                        .child(`${mess.time}.png`)
                        .getDownloadURL()
                        .then(url => {
                            console.log(url);
                            img_add = url;
                            mess.name = read_cookie('userName');
                            mess.userID = read_cookie('userID');
                            if (img_add)
                                mess.url = img_add;
                            setMessage(mess);
                            db.collection("messages").add(message);
                            let msg = messages;
                            msg.push(mess);
                            scroll.current = true;
                            setMessage({});
                            setMessages(msg);
                        });
                }
            );
        }
        else {
            let mess = message;
            mess.name = read_cookie('userName');
            mess.userID = read_cookie('userID');
            if (img_add)
                mess.url = img_add;
            setMessage(mess);
            db.collection("messages").add(message);
            let msg = messages;
            msg.push(mess);
            scroll.current = true;
            setMessage({});
            setMessages(msg);
        }
    }
    return (
        <>
            <Chat setLoginModalShow={setLoginModalShow} loginModalShow={loginModalShow} setSignupModalShow={setSignupModalShow} signupModalShow={signupModalShow} handleImageSelect={handleImageSelect} messages={messages} msgEnd={msgEnd} content={content} handleChange={handleChange} handleSubmit={handleSubmit} msgBox={msgBox} emojiPicker={emojiPicker} setEmojiPicker={setEmojiPicker} message={message} setMessage={setMessage} delMsg={delMsg} likeMsg={likeMsg} />
        </>
    )
}

export default ChatContainer
