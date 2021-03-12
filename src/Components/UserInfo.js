import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
function UserInfo(props) {
    const [user, setUser] = useState('');
    const setUserInfo = (e) => {
        e.preventDefault();
        console.log(user);
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
                    <input className="ml-3" name='user' value={user} onChange={(e) => setUser(e.target.value)} name="name" />
                    <Button className="ml-3" type="submit">Submit</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default UserInfo

