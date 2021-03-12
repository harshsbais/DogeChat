import React, { useState, useEffect } from 'react'
import { read_cookie } from 'sfcookies';
import UserInfo from './UserInfo'
import { Button } from 'react-bootstrap'
import './Chat.scss'
function Chat() {
    const [modalShow, setModalShow] = useState(true);
    useEffect(() => {
        console.log(read_cookie('userName'));
        console.log(read_cookie('userID'));
        if (read_cookie('userName').length !== 0) {
            setModalShow(false);
        }
    }, [])
    return (
        <div className='chatBox'>
            <UserInfo
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <nav class="navbar">
                <p className='mx-auto pt-1 navbar-inner' style={{ fontSize: '40px', fontFamily: "'Redressed', cursive" }}>Global Chat</p>
            </nav>
            <div className="user-msg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="my-msg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="user-msg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="user-msg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="user-msg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="user-msg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="my-msg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className='footer'>
                <input className="mt-4" style={{ width: '70%' }} />
                <button className="ml-4" style={{ backgroundColor: 'black', color: 'white', border: 'none' }}><i className="fa fa-arrow-right"></i></button>
            </div>
        </div >
    )
}

export default Chat
