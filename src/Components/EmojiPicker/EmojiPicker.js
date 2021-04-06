import React from 'react';
import Picker from 'emoji-picker-react';
import { Modal } from 'react-bootstrap';
import useForceUpdate from 'use-force-update';
import './EmojiPicker.css'
import { useDispatch, useSelector } from 'react-redux';
import { emojiModal } from '../../Redux/Modal/modalActions';
function EmojiPicker(props) {
    const dispatch = useDispatch();
    const forceUpdate = useForceUpdate();
    const hide = () => {
        dispatch(emojiModal(false))
    }
    const onEmojiClick = (event, emojiObject) => {
        let msg = props.message;
        if (!msg.content)
            msg.content = emojiObject.emoji + ' ';
        else
            msg.content += emojiObject.emoji + ' ';
        props.setMessage(msg);
        forceUpdate();
    };
    return (
        <div>
            <Modal
                show={useSelector(state => state.modal.emoji)}
                onHide={hide}
                aria-labelledby="contained-modal-title-vcenter"
                size="sm"
                centered>
                <Modal.Body>
                    <p style={{ color: "white", opacity: "80%" }}>{props.message.content}</p>
                    <Picker onEmojiClick={onEmojiClick} style={{ width: '100%' }} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default EmojiPicker
