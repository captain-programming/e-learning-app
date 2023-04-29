import * as api from "../../API";
import { AUTH_USER_LOGIN, AUTH_USER_SIGNUP, ERROR, LOADING, TOAST_CLEANER } from "./types";

export const userLogin = (crds) => async(dispatch)=>{
  try{
    let data = await api.loginApi(crds);
    if(data?.status===200){
      dispatch({type: AUTH_USER_LOGIN, payload: data?.data})
    };
  }catch(err){
    dispatch({type: ERROR, payload: err.response.data || err?.message})
  }
}

export const userSignup = (crds, fun) => async(dispatch)=>{
  dispatch({type: LOADING})
  try{
    let data = await api.signupApi(crds);
    if(data?.status===200){
      fun.setStep(1);
      fun.setFormData({name: "", email: "", mobile_no: "", username: "", password: ""});
      fun.setConfirmPassword("");
      fun.loginFun()
      dispatch({type: AUTH_USER_SIGNUP, payload: data?.data})
    };
  }catch(err){
    dispatch({type: ERROR, payload: err.response.data || err?.message})
  }
}

export const ToastCleaner = () => async(dispatch)=>{
  dispatch({type: TOAST_CLEANER})
}