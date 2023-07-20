import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers';

const reducer: ReducersMapObject = {
    users: userReducer.reducer
}

export const store = configureStore({
    reducer: reducer,
    devTools: true
})

export default store;