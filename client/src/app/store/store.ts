import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { ThunkAction, Action } from "@reduxjs/toolkit";
import authSlice from './auth/slice';


// Combining all reducers
const rootReducer = combineReducers({
    auth: authSlice
});


export const store = configureStore({
    reducer: rootReducer,
});

// Type exports
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
