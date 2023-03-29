import { createSlice } from '@reduxjs/toolkit'

const storedDarkTheme = localStorage.getItem('darkTheme')
const initialDarkTheme = storedDarkTheme ? JSON.parse(storedDarkTheme) : false

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        darkTheme: initialDarkTheme,
    },
    reducers: {
        toggleTheme: (state) => {
            state.darkTheme = !state.darkTheme
            localStorage.setItem('darkTheme', JSON.stringify(state.darkTheme))
        },
    },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
