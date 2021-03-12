import React, { useState, useEffect } from 'react'
import { read_cookie, delete_cookie } from 'sfcookies';
import UserInfo from './UserInfo'
function Chat() {
    const [modalShow, setModalShow] = useState(true);
    useEffect(() => {
        console.log(read_cookie('userName'));
        if (read_cookie('userName')) {
            setModalShow(false);
        }
    }, [])
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
