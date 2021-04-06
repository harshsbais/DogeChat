import React from 'react';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Messages.css'
import { useSelector } from 'react-redux';
function Messages(props) {
    const userId = useSelector(state => state.user.id)
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
            {props.messages.map((msg) => {
                return (
                    <Row style={{ width: '100%' }} key={msg.time}>
                        <div className={`msg ${(msg.userID === userId) ? 'my-msg' : ''}`}>
                            <span style={{ color: '#00fff5', fontSize: '12px' }}>{msg.name.length > 0 ? msg.name : "Anonymous"}</span>
                            <span style={{ color: '#00fff5', fontSize: '10px', float: "right" }}>
                                {convertTime(msg.time)} ago
                            </span>
                            {msg.url ?
                                <a rel="noreferrer" href={msg.url} target="_blank"><img src={msg.url} style={{ height: '400px', maxWidth: '100%' }} alt='meme' /></a>
                                :
                                ''
                            }
                            <p style={{ marginBottom: "0px", opacity: "87%" }}>{msg.content}</p>
                            <Button style={{ display: msg.userID === userId ? '' : 'none', backgroundColor: 'transparent', border: 'none', float: 'right' }} onClick={(e) => props.delMsg(msg.time)}><i className='fa fa-trash'></i></Button>
                            <span style={{ float: "right", display: msg.userID === userId ? 'none' : '', marginTop: "7px" }}>{msg.clap ?? 0}</span>
                            <span><Button style={{ display: msg.userID === userId ? 'none' : '', backgroundColor: 'transparent', border: 'none', float: "right", padding: "0", margin: "5px", opacity: "87%" }} onClick={(e) => props.likeMsg(msg.time, msg.clap ?? 0)}><i className='fa fa-thumbs-up'></i></Button></span>
                        </div>
                    </Row>
                )
            })
            }
        </div>
    )
}

export default Messages
