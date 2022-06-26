import {sendChat} from '../../actionTypes';

const initialState = {
    chatList: [{value: 1, label: "default"}]
}

export const chatReducer = (state = initialState, action)=>{
    switch (action.type){
      case sendChat:{
        return{
          ...state,
          chatList: state.chatList.concat(action.payload)
        }
      }
      default:
        return state;
    }
}