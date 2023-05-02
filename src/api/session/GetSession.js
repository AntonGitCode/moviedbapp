import { getResource } from '../GetResource'
const BASE_URL = 'https://api.themoviedb.org/3'

export default class GetSession {
  async getSession() {
    let session
    try {
      const sessionUrl = new URL(`${BASE_URL}/authentication/guest_session/new`)
      sessionUrl.searchParams.set('api_key', 'a0ebd979d0247d439d1914491e74f506')
      session = await getResource(sessionUrl.toString())
      if (!session || !session.success) throw new Error('Failed to get session')
    } catch (error) {
      console.error('Status: ', error.status, ' Error:', error)
    }
    return session
  }
}
