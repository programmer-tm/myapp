import { getNews, errorNews, registerStart, registerSuccess, registerErrors } from "./actionTypes";

export const getNew = (data) => ({
    type: getNews,
    payload: data
})

export const getError = (e) => ({
    type: errorNews,
    payload: e.toString()
})

export const regStart = () => ({
    type: registerStart
})

export const regSuccess = (user) => ({
    type: registerSuccess,
    payload: user
})

export const regError = (err) => ({
    type: registerErrors,
    payload: err.toString()
})