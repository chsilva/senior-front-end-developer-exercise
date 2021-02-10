const SESSION_KEY = 'rif:session'

const getSession = (): string => {
  return window.localStorage.getItem(SESSION_KEY) || ''
}

const setSession = (session: string): void => {
  window.localStorage.setItem(SESSION_KEY, session)
}

const clearSession = (): void => {
  return window.localStorage.removeItem(SESSION_KEY)
}

export { getSession, setSession, clearSession }
