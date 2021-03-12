import React, { useState, useEffect } from 'react'
import { read_cookie } from 'sfcookies';
import UserInfo from './UserInfo'
import { Form, Row } from 'react-bootstrap'
import './Chat.css'
import db from "../firebase.js";
import firebase from "firebase";
function Chat() {
    const [modalShow, setModalShow] = useState(true);
    const [message, setMessage] = useState({});
    const [messages, setMessages] = useState([]);
    const { content } = message;
    useEffect(() => {
        if (read_cookie('userName').length !== 0) {
            setModalShow(false);
        }
    }, [])
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
    }
    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value });
    }
    return (
        <>
            <div className='chatBox'>
                <UserInfo
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <nav className="navbar">
                    <p className='mx-auto pt-1 navbar-inner' style={{ fontSize: '40px', fontFamily: "'Redressed', cursive" }}>Global Chat</p>
                </nav>
                <Row style={{ width: '100%' }}>
                    <div className="user-msg">
                        <p style={{ color: 'orange' }}>Harsh</p>
                        <p>lorem ipsum</p>
                        <p style={{ color: 'orange' }}>3 days ago</p>
                    </div>
                </Row>
                <Row style={{ width: '100%' }}>
                    <div className="user-msg">
                        <p style={{ color: 'orange' }}>Harsh</p>
                        <p>lorem ipsum</p>
                        <p style={{ color: 'orange' }}>3 days ago</p>
                    </div>
                </Row>
                <Row style={{ width: '100%' }}>
                    <div className="my-msg">
                        <p style={{ color: 'orange' }}>Harsh</p>
                        <p>lorem ipsum</p>
                        <p style={{ color: 'orange' }}>3 days ago</p>
                    </div>
                </Row>
                <Row style={{ width: '100%' }}>
                    <div className="user-msg">
                        <p style={{ color: 'orange' }}>Harsh</p>
                        <p>lorem ipsum</p>
                        <p style={{ color: 'orange' }}>3 days ago</p>
                    </div>
                </Row>
                <Row style={{ width: '100%' }}>
                    <div className="my-msg">
                        <p style={{ color: 'orange' }}>Harsh</p>
                        <p>lorem ipsum</p>
                        <p style={{ color: 'orange' }}>3 days ago</p>
                    </div>
                </Row>
            </div >
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
