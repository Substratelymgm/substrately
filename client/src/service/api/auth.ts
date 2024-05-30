import { LoginForm, RegisterForm } from '../../utils/types';
import axios from 'axios';

const baseUrl: string = import.meta.env.VITE_BACKEND_ENDPOINT;

const api = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export const googleRegisterApi = async (code: string): Promise<any> => {
  return await api.post("/auth/google-register", { code });
};

export const googleLoginApi = async (code: string): Promise<any> => {
  return await api.post("/auth/google-login", { code });
};

export const facebookAuthApi = async ({ name, email }: { name: string, email: string }): Promise<any> => {
  return await api.post("/auth/facebook-auth", { name, email });
};

export const loginApi = async (user: LoginForm): Promise<any> => {
  return await api.post("/auth/login", user);
};

export const registerApi = async (user: RegisterForm): Promise<any> => {
  return await api.post("/auth/register", user);
};

export const logoutApi = async (): Promise<any> => {
  return await api.post("/auth/logout");
};

export const refreshApi = async (): Promise<any> => {
  return await api.post("/auth/refresh_token");
};

// New Password Reset APIs
export const requestPasswordResetApi = async (email: string): Promise<any> => {
  return await api.post("/auth/request-password-reset", { email });
};

export const verifyResetTokenApi = async ({ email, token }: { email: string; token: string }): Promise<any> => {
  return await api.post("/auth/verify-reset-token", { email, token });
};

export const resetPasswordApi = async ({ email, token, newPassword, confirmPassword }: { email: string; token: string; newPassword: string; confirmPassword: string }): Promise<any> => {
  return await api.post("/auth/reset-password", { email, token, newPassword, confirmPassword });
};
