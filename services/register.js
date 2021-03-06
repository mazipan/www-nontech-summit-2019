import axios from 'axios'

import { API_ENDPOINT } from '../constant/index'

const ACTION_SUBMIT = '?action=submit'

const generalPost = (url, token, data, success, failed, customAction) => {
  let param = ACTION_SUBMIT
  if (customAction) {
    param = customAction
  }
  const promiseRegister = tokenString => {
    return axios({
      url: `${url}${param}`,
      method: 'post',
      headers: {
        'Authorization': `Bearer ${tokenString}`,
        'Content-Type': 'application/json'
      },
      data
    })
  }

  promiseRegister(token)
    .then(res => {
      success && success(res)
    })
    .catch(err => {
      console.error('failed with error: ', err.response.data)
      failed && failed(err.response.data.data.message)
    })
}

export const registerParticipant = (token, data, success, failed) => {
  const URL = `${API_ENDPOINT.REGISTER_PARTICIPANT}`
  generalPost(URL, token, data, success, failed)
}

export const registerOtsParticipant = (token, data, success, failed) => {
  const URL = `${API_ENDPOINT.REGISTER_PARTICIPANT}`
  generalPost(URL, token, data, success, failed, '?action=submit&wxc=1')
}

export const registerSponsor = (token, data, success, failed) => {
  const URL = `${API_ENDPOINT.REGISTER_SPONSOR}`
  generalPost(URL, token, data, success, failed)
}

export const registerVolunteer = (token, data, success, failed) => {
  const URL = `${API_ENDPOINT.REGISTER_VOLUNTEER}`
  generalPost(URL, token, data, success, failed)
}

export const registerCoacher = (token, data, success, failed) => {
  const URL = `${API_ENDPOINT.REGISTER_COACHER}`
  generalPost(URL, token, data, success, failed)
}

export const registerSpeaker = (token, data, success, failed) => {
  const URL = `${API_ENDPOINT.REGISTER_SPEAKER}`
  generalPost(URL, token, data, success, failed)
}

export const paymentConfirmation = (token, data, success, failed) => {
  const URL = `${API_ENDPOINT.PAYMENT_CONFIRMATION}`
  generalPost(URL, token, data, success, failed)
}

export const redeemVoucher = (token, data, success, failed) => {
  const URL = `${API_ENDPOINT.REGISTER_PARTICIPANT}`
  generalPost(URL, token, data, success, failed, '?action=voucher')
}
