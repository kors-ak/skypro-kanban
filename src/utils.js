export function sanitizeHtml(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

export function sanitizeInput(text) {
  return String(text)
    .replaceAll('&', '')
    .replaceAll('<', '')
    .replaceAll('>', '')
}

export const formatDate = (data) => {
  const date = new Date(data)

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = String(date.getFullYear()).slice(-2)

  const result = `${day}.${month}.${year}`

  return result
}
