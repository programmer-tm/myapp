import { getNews, errorNews, registerStart, registerSuccess, registerErrors, loginStart, loginSuccess, loginErrors, logoutStart, logoutSuccess, logoutErrors } from "./actionTypes";

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

export const logStart = () => ({
    type: loginStart
})

export const logSuccess = (user) => ({
    type: loginSuccess,
    payload: user
})

export const logError = (err) => ({
    type: loginErrors,
    payload: err.toString()
})

export const logoStart = () => ({
    type: logoutStart
})

export const logoSuccess = () => ({
    type: logoutSuccess
})

export const logoError = (err) => ({
    type: logoutErrors,
    payload: err.toString()
})