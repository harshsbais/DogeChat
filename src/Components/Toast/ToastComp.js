import React from 'react'
import { Toast } from 'react-bootstrap';
function ToastComp(props) {
    return (
        <Toast style={{
            float: 'right', position: 'fixed', backgroundColor: `${(props.color === 'red' ? '#f34636' : '#52af50')}`, color: 'white'
        }} onClose={() => props.setAlert(false)} show={props.alert} delay={3000}>
            <Toast.Body>{props.data}</Toast.Body>
        </Toast>
    )
}

export default ToastComp
