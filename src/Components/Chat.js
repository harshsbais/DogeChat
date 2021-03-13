import React, { useState, useEffect, useRef } from 'react'
import { read_cookie } from 'sfcookies';
import UserInfo from './UserInfo'
import { Form, Row } from 'react-bootstrap'
import './Chat.css'
import db from "../firebase.js";
function Chat() {
    const [modalShow, setModalShow] = useState(true);
    const [message, setMessage] = useState({});
    const [messages, setMessages] = useState([]);
    const { content } = message;
    const msgEnd = useRef();
    useEffect(() => {
        if (read_cookie('userName').length !== 0) {
            setModalShow(false);
        }
    }, [])
    useEffect(() => {
        db.collection("messages")
            .orderBy("time", "asc")
            .onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            }
            )
    }, [])
    useEffect(() => {
        msgEnd?.current.scrollIntoView({ behavior: "auto" });
    }, [messages])
    const handleSubmit = (e) => {
        e.preventDefault();
        let mess = message;
        mess.time = new Date().getTime().toString();
        mess.name = read_cookie('userName');
        mess.userID = read_cookie('userID');
        setMessage(mess);
        console.log(message);
        db.collection("messages").add(message);
        setMessage({});
        db.collection("messages")
            .orderBy("time", "asc")
            .onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            }
            )
    }
    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value });
    }
    return (
        <>
            <div className='chatBox' id='chat'>
                <UserInfo
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <nav className="navbar">
                    <p className='mx-auto pt-1 navbar-inner' style={{ fontSize: '40px', fontFamily: "'Redressed', cursive" }}>Global Chat</p>
                </nav>
                {console.log(messages)}
                {messages.map((msg, idx) => {
                    if (msg.userID === read_cookie('userID')) {
                        return (
                            <Row style={{ width: '100%' }} key={idx}>
                                <div className="my-msg">
                                    <p style={{ color: 'orange' }}>{msg.name}</p>
                                    <p>{msg.content}</p>
                                    <p style={{ color: 'orange' }}>
                                        {parseInt((new Date().getTime().toString() - msg.time) / 60000)} min ago
                                    </p>
                                </div>
                            </Row>
                        )
                    }
                    else {
                        return (
                            <Row style={{ width: '100%' }} key={idx}>
                                <div className="user-msg">
                                    <p style={{ color: 'orange' }}>{msg.name}</p>
                                    <p>{msg.content}</p>
                                    <p style={{ color: 'orange' }}>
                                        {parseInt((new Date().getTime().toString() - msg.time) / 60000)} min ago
                                    </p>
                                </div>
                            </Row>
                        )
                    }
                })
                }
            </div >
            <div ref={msgEnd}></div>
            <div className='footer'>
                <Form onSubmit={handleSubmit}>
                    <input className="mt-4" required value={content ?? ''} name='content' onChange={handleChange} style={{ width: '70%' }} />
                    <button className="ml-4" style={{ backgroundColor: 'black', color: 'white', border: 'none' }} type="submit"><i className="fa fa-arrow-right"></i></button>
                </Form>
            </div>
        </>
    )
}

export default Chat
