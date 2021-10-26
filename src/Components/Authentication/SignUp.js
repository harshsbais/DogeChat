import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { bake_cookie } from 'sfcookies';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../Redux/UserInfo/userActions';
import { toastOpen, toastData, toastColor } from '../../Redux/Toast/toastActions'
import { signupModal } from '../../Redux/Modal/modalActions';
function SignUp() {
    const dispatch = useDispatch();
    let likes = [];
    const [userData, setUserData] = useState({
        remember: true
    });
    const { username, password, password2, remember } = userData;
    const setUserInfo = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        if (password === password2) {
            if (remember)
                bake_cookie('password', userData.password);
            bake_cookie('userName', userData.username);
            dispatch(getUserInfo(userData.username));
            bake_cookie('userID', new Date().getTime().toString());
            dispatch(signupModal(false))
            bake_cookie('likes', likes);
        }
        else {
            dispatch(toastOpen(true))
            dispatch(toastData("Password Incorrect"))
            dispatch(toastColor("red"))
        }
    }
    return (
        <Modal
            show={useSelector(state => state.modal.signup)}
            size="lg"
            backdrop="static"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body>
                <Form onSubmit={handleSubmit} style={{ color: "white", opacity: "87%" }}>
                    <center><h1 className="mb-5">Welcome to Doge Chat</h1></center>
                    <label htmlFor='user' style={{ margin: '20px 20px' }}>Username</label>
                    <input required autocomplete="off" className="float-right mt-2" name='username' style={{ width: "45%" }} value={username} onChange={setUserInfo} />
                    <br />
                    <label htmlFor='user' style={{ margin: '20px 20px' }}>Password</label>
                    <input required autocomplete="off" type="password" className="float-right" name='password' style={{ width: "45%" }} value={password} onChange={setUserInfo} />
                    <br />
                    <label htmlFor='user' style={{ margin: '20px 20px' }}>Confirm Password</label>
                    <input required autocomplete="off" type="password" className="float-right" name='password2' style={{ width: "45%" }} value={password2} onChange={setUserInfo} />
                    <br />
                    <span><label>Remember Me?</label></span>
                    <span style={{ margin: "7px 10px" }}><input required type="checkbox" onChange={() => setUserData({ ...userData, "remember": !remember })} defaultChecked={remember} /></span>
                    <button className="ml-3 mt-1 float-right" style={{ background: 'none', color: 'white', border: 'none' }}><i className="fa fa-arrow-right"></i></button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default SignUp

