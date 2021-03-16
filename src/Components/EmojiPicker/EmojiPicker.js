import React from 'react';
import Picker from 'emoji-picker-react';
import { Modal } from 'react-bootstrap';
import useForceUpdate from 'use-force-update';
function EmojiPicker(props) {
    const forceUpdate = useForceUpdate();
    const onEmojiClick = (event, emojiObject) => {
        let msg = props.message;
        if (!msg.content)
            msg.content = emojiObject.emoji;
        else
            msg.content += emojiObject.emoji;
        props.setMessage(msg);
        forceUpdate();
    };
    return (
        <div>
            {console.log('hello')}
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                size="sm"
                centered>
                <Modal.Body>
                    <p>{props.message.content}</p>
                    <Picker onEmojiClick={onEmojiClick} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default EmojiPicker
