import { AUTH_USER_LOGIN, AUTH_USER_SIGNUP, ERROR, LOADING, TOAST_CLEANER } from "./types";

const initial = {
  login: false,
  signup: false,
  loading: false,
  toastMessage: "",
  toastActivate: false,
  toastStatus: "error"
}

export const AuthReducer = (state=initial, {type, payload})=>{
  
  switch(type){
    case LOADING : return { ...state, loading: true }
    case ERROR : return { ...state, loading: false, toastActivate: true, toastMessage: payload, toastStatus: "error"}
    case AUTH_USER_LOGIN : return { ...state, login: true, loading: false, toastActivate: true, toastMessage: payload, toastStatus: "success"}
    case AUTH_USER_SIGNUP : return { ...state, signup: true, loading: false, toastActivate: true, toastMessage: payload, toastStatus: "success"}
    case TOAST_CLEANER : return {...state, toastMessage: "", toastActivate: false, toastStatus: "error"}
    default: return state;
  }
}