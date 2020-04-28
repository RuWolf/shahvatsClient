import React, { memo } from 'react'
import Login from '../components/login/Login'
import Main from '../components/main/main'

const LoginLayout = memo(() => {
  return (
    <Main>
      <Login/>
    </Main>
  )
})

LoginLayout.displayName = 'LoginLayout'
export default LoginLayout
