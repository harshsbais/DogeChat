import React from 'react'
import { Toast } from 'react-bootstrap';
function ToastComp(props) {
    return (
        <Toast style={{
            float: 'right', position: 'fixed', backgroundColor: `${(props.toastColor === 'red' ? '#f34636' : '#52af50')}`, color: 'white', zIndex: '10000'
        }} onClose={() => props.setShowToast(false)} show={props.showToast} delay={3000} autohide>
            <Toast.Body>{props.toastData}</Toast.Body>
        </Toast>
    )
}

export default ToastComp
