import React from 'react'
import UserInfo from './UserInfo'
import Messages from './Messages'
import { Form } from 'react-bootstrap';
function Chat(props) {
    return (
        <div>
            <>
                <div className='chatBox' id='chat'>
                    <UserInfo
                        show={props.modalShow}
                        onHide={() => props.setModalShow(false)}
                    />
                    <nav className="navbar">
                        <p className='mx-auto pt-1 navbar-inner' style={{ fontSize: '40px', fontFamily: "'Redressed', cursive" }}>Global Chat</p>
                    </nav>
                    <Messages messages={props.messages} />
                </div >
                <div ref={props.msgEnd}></div>
                <div className='footer'>
                    <Form onSubmit={props.handleSubmit}>
                        <input className="mt-4" required value={props.content ?? ''} name='content' onChange={props.handleChange} style={{ width: '70%' }} />
                        <button className="ml-4" style={{ backgroundColor: 'black', color: 'white', border: 'none' }} type="submit"><i className="fa fa-arrow-right"></i></button>
                    </Form>
                </div>
            </>
        </div>
    )
}

export default Chat
