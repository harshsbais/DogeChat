import React from 'react';
import Picker from 'emoji-picker-react';
import { Modal } from 'react-bootstrap'
function EmojiPicker(props) {
    const onEmojiClick = (event, emojiObject) => {
        let msg = props.message;
        if (!msg.content)
            msg.content = emojiObject.emoji;
        else
            msg.content += emojiObject.emoji;
        props.setMessage(msg);
    };
    return (
        <div>
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                size="sm"
                centered>
                <Modal.Body>
                    <Picker onEmojiClick={onEmojiClick} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default EmojiPicker
