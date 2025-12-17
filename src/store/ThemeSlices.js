import { createSlice } from '@reduxjs/toolkit'
const initalState = {
    mode: 'dark',
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: initalState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light'
        },
        setTheme: (state, action) => {
            state.mode = action.payload
        }
    }
})
export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer
