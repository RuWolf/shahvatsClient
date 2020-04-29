import React, { memo } from 'react'
import Login from '../components/login/Login'


const LoginLayout = memo(() => {
  return (
      <Login/>
  )
})

LoginLayout.displayName = 'LoginLayout'
export default LoginLayout
