import React from 'react';
import { Row } from 'react-bootstrap';
import { read_cookie } from 'sfcookies';
import './Messages.css'
function Messages(props) {
    return (
        <div className="messages">
            {props.messages.map((msg, idx) => {
                return (
                    <Row style={{ width: '100%' }} key={idx}>
                        <div className={`msg ${(msg.userID === read_cookie('userID')) ? 'my-msg' : ''}`}>
                            <p style={{ color: 'orange' }}>{msg.name}</p>
                            <p>{msg.content}</p>
                            <p style={{ color: 'orange' }}>
                                {parseInt((new Date().getTime().toString() - msg.time) / 60000)} min ago
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
