import jwtDecode from 'jwt-decode'

const basicAuth = async (data: { username: string; password: string }) => {
  try {
    const response = await fetch('/auth', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const dataJSON = await response.json()
    const { token } = dataJSON
    const decoded = jwtDecode(token)

    const answer = {
      user: decoded,
      token: token,
    }
    return answer
  } catch (error) {
    console.log(error)
    return false
  }
}
export default basicAuth
