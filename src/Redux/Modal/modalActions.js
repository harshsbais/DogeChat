export const signupModal = (isOpen) => {
    return {
        type: 'SIGNUP',
        payload: isOpen
    }
}

export const loginModal = (isOpen) => {
    return {
        type: 'LOGIN',
        payload: isOpen
    }
}

export const emojiModal = (isOpen) => {
    return {
        type: 'EMOJI',
        payload: isOpen
    }
}