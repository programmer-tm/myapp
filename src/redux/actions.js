import { getNews, errorNews } from "./actionTypes";

export const getNew = (data) => ({
    type: getNews,
    payload: data
})

export const getError = (e) => ({
    type: errorNews,
    payload: e.toString()
})