import React from 'react';
import { Row } from 'react-bootstrap';
import { read_cookie } from 'sfcookies';
import './Messages.css'
function Messages(props) {
    const convertTime = (seconds) => {
        seconds = (new Date().getTime().toString() - seconds);
        seconds /= 1000;
        let days = Math.floor(seconds / (3600 * 24));
        if (days > 0) return (days + " Days")
        seconds -= days * 3600 * 24;
        let hrs = Math.floor(seconds / 3600);
        if (hrs > 0) return (hrs + " Hours")
        seconds -= hrs * 3600;
        let mnts = Math.floor(seconds / 60);
        if (mnts > 0) return (mnts + " Minutes")
        seconds -= mnts * 60;
        return "Few Seconds"
    }
    return (
        <div className="messages">
            {props.messages.map((msg, idx) => {
                return (
                    <Row style={{ width: '100%' }} key={idx}>
                        <div className={`msg ${(msg.userID === read_cookie('userID')) ? 'my-msg' : ''}`}>
                            <p style={{ color: 'orange' }}>{msg.name.length > 0 ? msg.name : "Anonymous"}</p>
                            <p>{msg.content}</p>
                            <p style={{ color: 'orange' }}>
                                {convertTime(msg.time)} ago
                            </p>
                        </div>
                    </Row>
                )
            })
            }
        </div>
    )
}

export default Messages
