import { TYPES } from './actionTypes'

type loginTypes = {
    email: 'string',
    password: 'string'
}

export const postLogin = (payload: loginTypes) => ({
    type: TYPES.GET_AUTHENTICATION_REQUEST,
    payload
})

export const postSignup = (payload) => ({
    type: TYPES.POST_SIGNUP_REQUEST,
    payload
})