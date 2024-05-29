export interface CountryCode {
    code: string;
    name: string;
  }

export enum ApiStatus {
    "loading",
    "ideal",
    "success",
    "error"
}

export interface User {
  _id: string;
  firstName: string;
  lastName:string,
  username:string;
  email: string;
  avatar: string;
  accesstoken: string;
  role: string;
  level:'basic'| 'pro' | 'business'
  canReceiveJoinRequestForWorkSpace:boolean,
  canReceiveLinkRequestForArticle: boolean,
  canReceiveLinkRequestForNote: boolean
  payed:false;
}

export interface AuthState {
  user: User,
  getRegisterStatus: ApiStatus,
  getLoginStatus: ApiStatus,
  getLogoutStatus: ApiStatus,
  getRefreshStatus: ApiStatus,
  getGoogleRegisterAuthStatus: ApiStatus,
  getGoogleLoginAuthStatus: ApiStatus,
  getFacebookAuthStatus: ApiStatus,
  getRequestPasswordResetStatus: ApiStatus,
  getVerifyResetTokenStatus: ApiStatus,
  getResetPasswordStatus: ApiStatus,
  loginError: any,
  registerError: any,
  logoutError: any,
  refreshError: any,
  googleLoginAuthError: any,
  googleRegisterAuthError: any,
  facebookAuthError: any,
  requestPasswordResetError: any,
  verifyResetTokenError: any,
  resetPasswordError: any
}


export interface LoginForm {
  email:string,
  password:string
}

export interface RegisterForm {
  firstName: string,
  lastName:string,
  email:string,
  password: string,
  phoneNumber:string;
  confirmPassword: string,
}

export interface CountryInput {
  code: string;
  name: string;
}

