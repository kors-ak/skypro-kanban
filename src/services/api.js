import axios from 'axios'

const API_URL = 'https://wedev-api.sky.pro/api/kanban/'

let token = ''
export const user = JSON.parse(localStorage.getItem('user'))
if (user) {
  try {
    token = user.token || ''
  } catch (e) {
    console.error('Failed to parse user data from localStorage:', e)
    token = ''
  }
}
export const updateToken = (newToken) => {
  token = newToken
}

export async function fetchTasks() {
  try {
    const data = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data.data.tasks
  } catch (error) {
    throw new Error(error.message, { cause: error })
  }
}

export async function getTaskById({ id }) {
  try {
    const data = await axios.get(API_URL + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data.data.task
  } catch (error) {
    throw new Error(error.message, { cause: error })
  }
}

export async function postTask({ task }) {
  try {
    const data = await axios.post(API_URL, task, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': '',
      },
    })
    return data.data.tasks
  } catch (error) {
    throw new Error(error.message, { cause: error })
  }
}

export async function editTask({ id, task }) {
  try {
    const data = await axios.put(API_URL + id, task, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': '',
      },
    })
    return data.data.tasks
  } catch (error) {
    throw new Error(error.message, { cause: error })
  }
}

export async function deleteTask({ id }) {
  try {
    const data = await axios.delete(API_URL + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data.data.tasks
  } catch (error) {
    throw new Error(error.message, { cause: error })
  }
}
