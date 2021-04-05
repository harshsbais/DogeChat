export const getUserInfo = (name) => {
    return {
        type: 'USER_INFO',
        payload: name
    }
}