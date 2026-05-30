import axios from 'axios'

const API_URL = 'https://wedev-api.sky.pro/api/user'

export async function signIn(userData) {
  const data = await axios.post(API_URL + '/login', userData, {
    headers: {
      'Content-Type': '',
    },
  })

  return data.data.user
}

export async function signUp(userData) {
  const data = await axios.post(API_URL, userData, {
    headers: {
      'Content-Type': '',
    },
  })

  return data.data.user
}
