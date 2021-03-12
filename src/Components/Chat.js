import React, { useState } from 'react'
import UserInfo from './UserInfo'
function Chat() {
    const [modalShow, setModalShow] = useState(true);
    return (
        <div>
            <UserInfo
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            Chat Box
        </div>
    )
}

export default Chat
