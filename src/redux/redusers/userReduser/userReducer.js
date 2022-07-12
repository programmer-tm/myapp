import { auth } from "../../../components/firebase";
import { regError, regSuccess, regStart } from "../../actions";
import { registerErrors, registerStart, registerSuccess } from "../../actionTypes";

const initialState = {
    loading: false,
    error: null,
    currentUser: null
}

export const userReducer = (state = initialState, action)=>{
    switch (action.type){
      case registerStart:
        return{
          ...state,
          loading: true
        }
      case registerSuccess:
        return{
          ...state,
          currentUser: action.payload,
          loading: false
        }
      case registerErrors:
        return{
          ...state,
          error: action.payload,
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
      user.updateProfile({
        userName
      })
      dispatch(regSuccess(user))
    })
    .catch((err) => dispatch(regError(err)))
  }
}