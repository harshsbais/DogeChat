import React from 'react'
import UserInfo from '../UserInfo/UserInfo'
import Messages from '../Messages/Messages'
import { Form } from 'react-bootstrap';
import logo from '../../assets/logo.png'
function Chat(props) {
    return (
        <>
            <div className='chatBox' id='chat'>
                <UserInfo
                    show={props.modalShow}
                    onHide={() => props.setModalShow(false)}
                />
                <nav className="navbar">
                    <a className="navbar-brand" href="/"><img style={{ height: "90px" }} alt="logo" src={logo} /></a>
                    <p className='mx-auto pt-1 navbar-inner' style={{ fontSize: '40px', fontFamily: "'Redressed', cursive" }}>DogeChat</p>
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
    )
}

export default Chat
