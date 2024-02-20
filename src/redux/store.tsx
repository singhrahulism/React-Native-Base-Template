import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from '@redux/features/loading/loadingSlice'

const store = configureStore({
    reducer: {
        loading: loadingReducer
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }))
})

export type IRootState = ReturnType<typeof store.getState>

export default store ;