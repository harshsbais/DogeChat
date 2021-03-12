import React, { useState, useEffect } from 'react'
import { read_cookie, delete_cookie } from 'sfcookies';
import UserInfo from './UserInfo'
function Chat() {
    const [modalShow, setModalShow] = useState(true);
    useEffect(() => {
        console.log(read_cookie('userName'));
        console.log(read_cookie('userID'));
        if (read_cookie('userName').length !== 0) {
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
