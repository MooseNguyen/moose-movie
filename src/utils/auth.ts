import { Cookies } from 'react-cookie'

const cookies = new Cookies()

export const getSessionIdFromCookie = () => cookies.get('sessionId')
