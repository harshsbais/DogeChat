import React from 'react';
import { Row } from 'react-bootstrap';
import { read_cookie } from 'sfcookies';
import { Button } from 'react-bootstrap';
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
            {props.messages.map((msg) => {
                return (
                    <Row style={{ width: '100%' }} key={msg.time}>
                        <div className={`msg ${(msg.userID === read_cookie('userID')) ? 'my-msg' : ''}`}>
                            <center><p style={{ color: '#F65058FF', fontSize: '12px' }}>{msg.name.length > 0 ? msg.name : "Anonymous"}</p></center>
                            {msg.url ?
                                <img src={msg.url} style={{ height: '400px', maxWidth: '100%' }} alt='meme' />
                                :
                                ''
                            }
                            <Button style={{ display: msg.userID === read_cookie('userID') ? '' : 'none', backgroundColor: 'transparent', border: 'none', float: 'right' }} onClick={(e) => props.delMsg(msg.time)}><i className='fa fa-trash'></i></Button>
                            <p>{msg.content}</p>
                            <Button style={{ display: msg.userID === read_cookie('userID') ? 'none' : '', backgroundColor: 'transparent', border: 'none' }} onClick={(e) => props.likeMsg(msg.time, msg.clap ?? 0)}><i className='fa fa-thumbs-up'></i></Button>
                            <span>{msg.clap ?? 0}</span>
                            <center><p style={{ color: '#F2AA4CFF', fontSize: '12px' }}>
                                {convertTime(msg.time)} ago
                            </p></center>
                        </div>
                    </Row>
                )
            })
            }
        </div>
    )
}

export default Messages
