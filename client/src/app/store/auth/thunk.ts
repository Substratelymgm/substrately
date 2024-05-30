import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, registerApi, logoutApi, refreshApi, googleRegisterApi, googleLoginApi, facebookAuthApi, requestPasswordResetApi, verifyResetTokenApi, resetPasswordApi } from "../../../service/api/auth";
import { LoginForm, RegisterForm } from "../../../utils/types";

export const login = createAsyncThunk(
    'auth/login',
    async (data: LoginForm, { rejectWithValue }) => {
        try {
            const response = await loginApi(data);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const register = createAsyncThunk(
    'auth/register',
    async (data: RegisterForm, { rejectWithValue }) => {
        try {
            const response = await registerApi(data);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            const response = await logoutApi();
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const refresh = createAsyncThunk(
    'auth/refresh',
    async (_, { rejectWithValue }) => {
        try {
            const response = await refreshApi();
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const googleRegister = createAsyncThunk(
    'auth/googleRegister',
    async (code: string, { rejectWithValue }) => {
        try {
            const response = await googleRegisterApi(code);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const googleLogin = createAsyncThunk(
    'auth/googleLogin',
    async (code: string, { rejectWithValue }) => {
        try {
            const response = await googleLoginApi(code);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const facebookAuth = createAsyncThunk(
    'auth/facebookAuth',
    async ({ name, email }: { name: string, email: string }, { rejectWithValue }) => {
        try {
            const response = await facebookAuthApi({ name, email });
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const requestPasswordReset = createAsyncThunk(
    'auth/requestPasswordReset',
    async (email: string, { rejectWithValue }) => {
        try {
            const response = await requestPasswordResetApi(email);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const verifyResetToken = createAsyncThunk(
    'auth/verifyResetToken',
    async ({ email, token }: { email: string, token: string }, { rejectWithValue }) => {
        try {
            const response = await verifyResetTokenApi({ email, token });
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const resetPassword = createAsyncThunk(
    'auth/resetPassword',
    async ({ email, token, newPassword, confirmPassword }: { email: string, token: string, newPassword: string, confirmPassword: string }, { rejectWithValue }) => {
        try {
            const response = await resetPasswordApi({ email, token, newPassword, confirmPassword });
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error?.response?.data);
        }
    }
);
