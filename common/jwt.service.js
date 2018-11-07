const ID_TOKEN_KEY = 'id_token'

export const getToken = () => {
  if (process.client) return window.localStorage.getItem(ID_TOKEN_KEY)
  return null
}

export const saveToken = token => {
  if (process.client) window.localStorage.setItem(ID_TOKEN_KEY, token)
}

export const destroyToken = () => {
  if (process.client) window.localStorage.removeItem(ID_TOKEN_KEY)
}

export default { getToken, saveToken, destroyToken }
