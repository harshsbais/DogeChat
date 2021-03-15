import React, { useState, useEffect, useRef } from 'react'
import { read_cookie } from 'sfcookies';
import Chat from './Chat';
import './Chat.css'
import db from "../../firebase.js";
function ChatContainer() {
    const [modalShow, setModalShow] = useState(true);
    const [message, setMessage] = useState({});
    const [messages, setMessages] = useState([]);
    const [emojiPicker, setEmojiPicker] = useState(false);
    const { content } = message;
    const msgEnd = useRef(null);
    const msgBox = useRef(null);
    const setMsg = () => {
        db.collection("messages")
            .orderBy("time", "asc")
            .onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            }
            )
    }
    useEffect(() => {
        msgBox?.current.focus();
        msgEnd?.current.scrollIntoView({ behavior: "auto" });
    }, [messages])
    useEffect(() => {
        if (read_cookie('userID').length !== 0) {
            setModalShow(false);
        }
        setMsg();
    }, []);
    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let mess = message;
        mess.time = new Date().getTime().toString();
        mess.name = read_cookie('userName');
        mess.userID = read_cookie('userID');
        setMessage(mess);
        db.collection("messages").add(message);
        let msg = messages;
        msg.push(mess);
        setMessage({});
        setMessages(msg);
    }
    return (
        <Chat modalShow={modalShow} messages={messages} msgEnd={msgEnd} content={content} handleChange={handleChange} setModalShow={setModalShow} handleSubmit={handleSubmit} msgBox={msgBox} emojiPicker={emojiPicker} setEmojiPicker={setEmojiPicker} message={message} setMessage={setMessage} />
    )
}

export default ChatContainer
