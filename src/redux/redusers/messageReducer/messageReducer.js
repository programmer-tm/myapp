import {send,del} from '../../actionTypes';

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
      case del:{
        return{
          ...state,
          messageList: state.messageList.filter((item) => item.id !== action.payload )
        }
      }
      default:
        return state;
    }
}