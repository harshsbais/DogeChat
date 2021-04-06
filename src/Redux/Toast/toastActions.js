export const toastOpen = (open) => {
    return {
        type: 'TOAST_OPEN',
        payload: open
    }
}

export const toastData = (data) => {
    return {
        type: 'TOAST_DATA',
        payload: data
    }
}

export const toastColor = (color) => {
    return {
        type: 'TOAST_COLOR',
        payload: color
    }
}