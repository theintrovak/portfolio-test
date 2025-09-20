import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './ThemeSlices'
export const store = configureStore({
    reducer: {
        theme: themeReducer
    }
})