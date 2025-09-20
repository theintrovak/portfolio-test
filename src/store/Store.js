import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './ThemeSlices'
export const store = configureStore({
    reducer: {
        theme: themeSlice.reducer
    }
})