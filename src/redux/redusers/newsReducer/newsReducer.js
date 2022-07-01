import { getError, getNew } from "../../actions"
import { getNews, load_News, errorNews } from "../../actionTypes"

const initialState = {
    newsList: [],
    loading: false,
    errors: null
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type){
        case getNews:{
            return {
                ...state,
                newsList: action.payload,
                loading: false
            }
        }
        case load_News:{
            return {
                ...state,
                loading: true
            }
        }
        case errorNews:{
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        }
        default:
            return state
    }
}

export const loadNews = () => {
    return async dispatch => {
        dispatch({type: load_News});
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            dispatch(getNew(data));
        } catch (e) {
            dispatch(getError(e));
        }
    }
}