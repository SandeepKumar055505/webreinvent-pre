import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import { localStorageMiddleware } from './localStorageMiddleware';
import loadingReducer from '../features/loading/loadingSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        loading: loadingReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
