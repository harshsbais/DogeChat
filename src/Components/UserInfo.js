import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { bake_cookie, read_cookie } from 'sfcookies';
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
                    <input className="ml-3" name='user' value={user} onChange={(e) => setUser(e.target.value)} />
                    <Button className="ml-3" type="submit">Submit</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default UserInfo

