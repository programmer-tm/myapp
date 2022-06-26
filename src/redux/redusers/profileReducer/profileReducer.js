import {plus,minus} from '../../actionTypes';

const initialState = {
    count: 0
}

export const profileReducer = (state = initialState, action)=>{
    switch (action.type){
      case plus: {
        return{
          ...state,
          count: state.count+1
        }
      }
      case minus: {
        return{
          ...state,
          count: state.count-1
        }
      }
      default:
        return state;
    }
}