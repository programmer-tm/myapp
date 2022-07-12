import { auth } from "../../../components/firebase";
import { regError, regSuccess, regStart, logStart, logSuccess, logError, logoStart, logoSuccess, logoError } from "../../actions";
import { loginErrors, loginStart, loginSuccess, logoutErrors, logoutStart, logoutSuccess, registerErrors, registerStart, registerSuccess } from "../../actionTypes";

const initialState = {
    loading: false,
    error: null,
    currentUser: null
}

export const userReducer = (state = initialState, action)=>{
    switch (action.type){
      case registerStart:
      case loginStart:
      case logoutStart:
        return{
          ...state,
          loading: true
        }
      case registerSuccess:
      case loginSuccess:
        return{
          ...state,
          currentUser: action.payload,
          loading: false
        }
      case registerErrors:
      case loginErrors:
      case logoutErrors:
        return{
          ...state,
          error: action.payload,
          loading: false
        }
      case logoutSuccess:
        return{
          ...state,
          currentUser: null,
          loading: false
        }

      default:
        return state;
    }
}

export const registerInintiate = (userName, email, password) => {
  return(dispatch) => {
    dispatch(regStart())
    auth
      .createUserWithEmailAndPassword(email,password)
      .then(({user}) => {
        user.updateProfile({userName})
        dispatch(regSuccess(user))
      })
      .catch((err) => dispatch(regError(err)))
  }
}

export const loginInintiate = (email, password) => {
  return(dispatch) => {
    dispatch(logStart())
    auth
      .signInWithEmailAndPassword(email,password)
      .then(({user}) => {
        dispatch(logSuccess(user))
      })
      .catch((err) => dispatch(logError(err)))
  }
}

export const logoutInintiate = (email, password) => {
  return(dispatch) => {
    dispatch(logoStart())
    auth
      .signOut()
      .then(() => {
        dispatch(logoSuccess())
      })
      .catch((err) => dispatch(logoError(err)))
  }
}