import React from 'react'
import SignUp from '../Authentication/SignUp'
import Login from '../Authentication/Login'
import EmojiPicker from '../EmojiPicker/EmojiPicker'
import Messages from '../Messages/Messages'
import { Form } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import ToastComp from '../Toast/ToastComp'
function Chat(props) {
    return (
        <>
            <ToastComp setShowToast={props.setShowToast} showToast={props.showToast} toastData={props.toastData} toastColor={props.toastColor} />
            <div className='chatBox' id='chat'>
                <EmojiPicker
                    show={props.emojiPicker}
                    onHide={() => props.setEmojiPicker(false)}
                    message={props.message}
                    setMessage={props.setMessage}
                />
                <SignUp
                    show={props.signupModalShow}
                    onHide={() => props.setSignupModalShow(false)}
                    setShowToast={props.setShowToast}
                    setToastData={props.setToastData}
                    setToastColor={props.setToastColor}
                />
                <Login
                    show={props.loginModalShow}
                    onHide={() => props.setLoginModalShow(false)}
                    setShowToast={props.setShowToast}
                    setToastData={props.setToastData}
                    setToastColor={props.setToastColor}
                />
                <nav className="navbar">
                    <img className="navbar-brand" style={{ height: "90px" }} alt="logo" src={logo} />
                    <p className='mx-auto pt-1 navbar-inner' style={{ fontSize: '40px', fontFamily: "'Redressed', cursive" }}>DogeChat</p>
                </nav>
                <Messages messages={props.messages} delMsg={props.delMsg} likeMsg={props.likeMsg} />
            </div >
            <div ref={props.msgEnd}></div>
            <div className='footer'>
                <Form onSubmit={props.handleSubmit}>
                    <div class="image-upload" style={{ float: 'left', marginTop: '27px', marginLeft: '8%' }}>
                        <label for="file-input">
                            <i className="fa fa-upload" style={{ height: '3-px', color: 'white' }} alt="upload" />
                        </label>
                        <input id="file-input" onChange={props.handleImageSelect} type="file" />
                    </div>
                    <img className="pb-1" style={{ height: '30px', marginRight: "2%" }} src={logo} alt="emoji-picker" onClick={(e) => props.setEmojiPicker(true)} />
                    <input autocomplete="off" className="mt-4 mx-auto" ref={props.msgBox} required value={props.message.content ?? ''} name='content' onChange={props.handleChange} style={{ width: '60%', outline: 'none', padding: '0px 10px' }} />
                    <button style={{ background: 'none', color: 'white', border: 'none', marginLeft: "2%" }} type="submit"><i className="fa fa-arrow-right"></i></button>
                </Form>
            </div>
        </>
    )
}

export default Chat
