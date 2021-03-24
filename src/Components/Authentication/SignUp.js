import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import Switch from "react-switch";
import { bake_cookie } from 'sfcookies';
function SignUp(props) {
    const [userData, setUserData] = useState({});
    const { username, password, password2, remember } = userData;
    const setUserInfo = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    const handleSwitchChange = (checked) => {
        setUserData({ ...userData, ['remember']: checked })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        if (password === password2) {
            bake_cookie('userName', userData.username);
            bake_cookie('password', userData.password);
            bake_cookie('userID', new Date().getTime().toString());
            props.onHide();
        }
        else
            alert("password not matching")
    }
    return (
        <Modal
            {...props}
            size="lg"
            backdrop="static"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <center><h1>Welcome to Doge Chat</h1>
                        <label htmlFor='user'>Username</label>
                        <input className="ml-3 mt-1" name='username' value={username} onChange={setUserInfo} />
                        <br />
                        <label htmlFor='user'>Password</label>
                        <input type="password" className="ml-3 mt-1" name='password' value={password} onChange={setUserInfo} />
                        <br />
                        <label htmlFor='user'>Confirm Password</label>
                        <input type="password" className="ml-3 mt-1" name='password2' value={password2} onChange={setUserInfo} />
                    </center>
                    <label>Remember Me?</label>
                    <Switch name="remember" onChange={handleSwitchChange} checked={remember ?? 'true'} />
                    <button className="ml-3 mt-1 float-right" style={{ backgroundColor: 'white', color: 'black', border: 'none' }}><i className="fa fa-arrow-right"></i></button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default SignUp

