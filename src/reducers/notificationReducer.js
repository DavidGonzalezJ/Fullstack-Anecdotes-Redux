import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        setNotification(state, action){
            return action.payload
        },
        // eslint-disable-next-line no-unused-vars
        hideNotification(state, action){
            return ''
        }
    }
})

export const { setNotification, hideNotification } = notificationSlice.actions
export default notificationSlice.reducer