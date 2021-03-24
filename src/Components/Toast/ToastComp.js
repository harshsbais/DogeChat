import React from 'react'
import { Toast } from 'react-bootstrap';
function ToastComp(props) {
    return (
        <Toast style={{
            float: 'right', position: 'fixed', backgroundColor: `${(props.color === 'red' ? '#f34636' : '#52af50')}`, color: 'white', zIndex: '10000'
        }} onClose={() => props.setShowToast(false)} show={props.showToast} delay={5000} autohide>
            <Toast.Body>{props.data}</Toast.Body>
        </Toast>
    )
}

export default ToastComp
