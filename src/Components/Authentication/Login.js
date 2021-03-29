import React, { useState, useEffect } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { read_cookie } from 'sfcookies';
import "./Auth.css"
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
                <Form onSubmit={setUserInfo} style={{ color: "white" }}>
                    <center><h1 className="mb-5">Welcome Back 👋  {username}</h1></center>
                    <label htmlFor='user' style={{ marginLeft: "20px" }}>Password</label>
                    <input type="password" className="float-right" name='password' style={{ width: "45%" }} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <button style={{ background: 'none', color: "white", border: 'none', float: "right" }}><i className="fa fa-arrow-right mt-4"></i></button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default Login

