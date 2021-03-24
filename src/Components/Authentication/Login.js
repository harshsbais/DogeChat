import React, { useState, useEffect } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { read_cookie } from 'sfcookies';
function Login(props) {
    console.log(props);
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    useEffect(() => {
        setUsername(read_cookie("userName"));
    }, [])
    const setUserInfo = (e) => {
        e.preventDefault();
        console.log(password)
        let pwd = read_cookie("password");
        if (pwd === password)
            props.onHide();
        else {
            props.setShowToast(true);
            props.setToastColor("red");
            props.setToastData("Password Incorrect")
        }
    }
    return (
        <Modal
            {...props}
            size="lg"
            backdrop="static"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body>
                <Form onSubmit={setUserInfo}>
                    <center><h1>Welcome Back 👋 {username}</h1>
                        <label htmlFor='user'>Password</label>
                        <input type="password" className="ml-3 mt-1" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <br />
                    </center>
                    <button className="ml-3 mt-1 float-right" style={{ backgroundColor: 'white', color: 'black', border: 'none' }}><i className="fa fa-arrow-right"></i></button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default Login

