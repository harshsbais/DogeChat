import React, { useState, useEffect } from 'react'
import { read_cookie } from 'sfcookies';
import UserInfo from './UserInfo'
import { Form, Row } from 'react-bootstrap'
import './Chat.css'
function Chat() {
    const [modalShow, setModalShow] = useState(true);
    const [message, setMessage] = useState({});
    useEffect(() => {
        if (read_cookie('userName').length !== 0) {
            setModalShow(false);
        }
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        message.time = new Date().getTime().toString();
        message.name = read_cookie('userName');
        message.userID = read_cookie('userID');
        console.log(message);
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p style={{ color: 'orange' }}>3 days ago</p>
                    </div>
                </Row>
                <Row style={{ width: '100%' }}>
                    <div className="my-msg">
                        <p style={{ color: 'orange' }}>Harsh</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p style={{ color: 'orange' }}>3 days ago</p>
                    </div>
                </Row>
                <Row style={{ width: '100%' }}>
                    <div className="user-msg">
                        <p style={{ color: 'orange' }}>Harsh</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p style={{ color: 'orange' }}>3 days ago</p>
                    </div>
                </Row >
                <Row style={{ width: '100%' }}>
                    <div className="user-msg">
                        <p style={{ color: 'orange' }}>Harsh</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p style={{ color: 'orange' }}>3 days ago</p>
                    </div>
                </Row>
                <Row style={{ width: '100%' }}>
                    <div className="user-msg">
                        <p style={{ color: 'orange' }}>Harsh</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p style={{ color: 'orange' }}>3 days ago</p>
                    </div>
                </Row>
                <Row style={{ width: '100%' }}>
                    <div className="user-msg">
                        <p style={{ color: 'orange' }}>Harsh</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p style={{ color: 'orange' }}>3 days ago</p>
                    </div>
                </Row>
                <Row style={{ width: '100%' }}>
                    <div className="my-msg">
                        <p style={{ color: 'orange' }}>Harsh</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p style={{ color: 'orange' }}>3 days ago</p>
                    </div>
                </Row>
            </div >
            <div className='footer'>
                <Form onSubmit={handleSubmit}>
                    <input className="mt-4" value={message.content} name='content' onChange={handleChange} style={{ width: '70%' }} />
                    <button className="ml-4" style={{ backgroundColor: 'black', color: 'white', border: 'none' }} type="submit"><i className="fa fa-arrow-right"></i></button>
                </Form>
            </div>
        </>
    )
}

export default Chat
