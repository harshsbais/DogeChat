import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { bake_cookie } from 'sfcookies';
function Login(props) {
    const [password, setPassword] = useState('');
    const setUserInfo = (e) => {
        e.preventDefault();
        console.log(password)
        // bake_cookie('userName', userData);
        // bake_cookie('userID', new Date().getTime().toString());
        // props.onHide();
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
                    <center><h1>Welcome Back 👋</h1>
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

