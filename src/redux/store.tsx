import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from '@redux/features/loading/loadingSlice'

export default configureStore({
    reducer: {
        loading: loadingReducer
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }))
})
