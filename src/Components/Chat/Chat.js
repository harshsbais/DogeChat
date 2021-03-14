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
                    modalShow={props.modalShow}
                    onHide={() => props.setModalShow(false)}
                    modalBox={props.modalBox}
                />
                <nav className="navbar">
                    <img className="navbar-brand" style={{ height: "90px" }} alt="logo" src={logo} />
                    <p className='mx-auto pt-1 navbar-inner' style={{ fontSize: '40px', fontFamily: "'Redressed', cursive" }}>DogeChat</p>
                </nav>
                <Messages messages={props.messages} />
            </div >
            <div ref={props.msgEnd}></div>
            <div className='footer'>
                <Form onSubmit={props.handleSubmit}>
                    <input className="mt-4" ref={props.msgBox} required value={props.content ?? ''} name='content' onChange={props.handleChange} style={{ width: '70%' }} />
                    <button className="ml-4" style={{ backgroundColor: 'black', color: 'white', border: 'none' }} type="submit"><i className="fa fa-arrow-right"></i></button>
                </Form>
            </div>
        </>
    )
}

export default Chat
