import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CredentialsType } from '../../types.ts/auth.type';
import * as apiService from '../../services/UserService';

interface AuthState {
    isAuthenticated: boolean;
    user: any;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    isAuthenticated: !!localStorage.getItem('token'),
    // not getting user details from api service
    // user: JSON.parse(localStorage.getItem('user') || '{}'),
    user: localStorage.getItem('token'),
    loading: false,
    error: null,
};

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (credentials: CredentialsType, { rejectWithValue }) => {
        try {
            const response = await apiService.register(credentials);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials: CredentialsType, { rejectWithValue }) => {
        try {
            const response = await apiService.login(credentials);
            console.log(response, "awaitawaitawait", response.data.id, response.data)
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                //  localStorage.setItem('user', JSON.stringify(user))
            }
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutUser(state) {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isAuthenticated = false;
                state.user = action.payload.user;
                state.loading = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                (state as any).error = action.payload;
                state.loading = false;
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.user = action.payload.user;
                state.loading = false;
            })
            .addCase(loginUser.rejected, (state, action) => {
                (state as any).error = action.payload;
                state.loading = false;
            });
    },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
