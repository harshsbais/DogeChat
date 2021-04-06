import React from 'react'
import { Toast } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { toastOpen } from '../../Redux/Toast/toastActions'
function ToastComp() {
    const dispatch = useDispatch();
    const color = useSelector(state => state.toast.color)
    const open = useSelector(state => state.toast.open)
    const data = useSelector(state => state.toast.data)
    return (
        <Toast style={{
            float: 'right', position: 'fixed', backgroundColor: `${(color === 'red' ? '#f34636' : '#52af50')}`, color: 'white', zIndex: '10000'
        }} onClose={() => dispatch(toastOpen(false))} show={open} delay={3000} autohide>
            <Toast.Body>{data}</Toast.Body>
        </Toast>
    )
}

export default ToastComp
