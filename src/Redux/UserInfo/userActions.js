export const getUserInfo = (name) => {
    return {
        type: 'USER_NAME',
        payload: name
    }
}

export const getUserId = (id) => {
    return {
        type: 'USER_ID',
        payload: id
    }
}