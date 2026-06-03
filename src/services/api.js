import axios from 'axios'

const API_URL = 'https://wedev-api.sky.pro/api/kanban/'

export async function fetchTasks({ token }) {
  const data = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return data
}

export async function getTaskById({ token, id }) {
  const data = await axios.get(API_URL + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return data
}

export async function postTask({ token, task }) {
  const data = await axios.post(
    API_URL,
    {
      ...(task.title ? { title: task.title } : {}),
      ...(task.description ? { description: task.description } : {}),
      ...(task.topic ? { topic: task.topic } : {}),
      ...(task.date ? { date: task.date } : {}),
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': '',
      },
    },
  )
  return data
}

export async function editTask({ token, id, task }) {
  const data = await axios.put(
    API_URL + id,
    {
      ...(task.title ? { title: task.title } : {}),
      ...(task.status ? { status: task.status } : {}),
      ...(task.topic ? { topic: task.topic } : {}),
      ...(task.description ? { description: task.description } : {}),
      ...(task.date ? { date: task.date } : {}),
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': '',
      },
    },
  )
  return data
}

export async function deleteTask({ token, id }) {
  const data = await axios.delete(API_URL + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return data
}
