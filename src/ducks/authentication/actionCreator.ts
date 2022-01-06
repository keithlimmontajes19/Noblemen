import { TYPES } from './actionTypes'

export const postLogin = (payload) => ({
    type: TYPES.GET_AUTHENTICATION_REQUEST,
    payload
})

export const postSignup = (payload) => ({
    type: TYPES.POST_SIGNUP_REQUEST,
    payload
})