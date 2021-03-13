import React, { useState } from 'react'
import { Modal, Form } from 'react-bootstrap'
import { bake_cookie } from 'sfcookies';
function UserInfo(props) {
    const [user, setUser] = useState('');
    const setUserInfo = (e) => {
        e.preventDefault();
        bake_cookie('userName', user);
        bake_cookie('userID', new Date().getTime().toString());
        props.onHide();
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body>
                <Form onSubmit={setUserInfo}>
                    <label htmlFor='user'>Enter Your Name</label>
                    <input className="ml-3 mt-1" name='user' value={user} onChange={(e) => setUser(e.target.value)} />
                    <button className="ml-3 mt-1 float-right" style={{ backgroundColor: 'white', color: 'black', border: 'none' }}><i className="fa fa-arrow-right"></i></button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default UserInfo

