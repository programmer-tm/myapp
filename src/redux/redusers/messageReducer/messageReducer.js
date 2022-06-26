import {send} from '../../actionTypes';

const initialState = {
    messageList: []
}

export const messageReducer = (state = initialState, action)=>{
    switch (action.type){
      case send:{
        return{
          ...state,
          messageList: state.messageList.concat(action.payload)
        }
      }
      default:
        return state;
    }
}