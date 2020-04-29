import jwtDecode from 'jwt-decode'

const basicAuth = async (data: { username: string; password: string }) => {
  try {
    // const response = await fetch('/auth', {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    // const dataJSON = await response.json()
    // const { token } = dataJSON
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiIsImlhdCI6MTU4NzY1MDAwOH0.s-MqVEFP--uAOYQbq63IaKcXwCSv-BVdoX8tp4vYPyI'
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
