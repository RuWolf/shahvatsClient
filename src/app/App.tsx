import React, { memo } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from '../layout/defaultLayout'
import Login from '../layout/loginLayout'
import { useStoreon } from 'storeon/react'

const App = memo(() => {
  const { auth } = useStoreon('auth')
  const { authenticated } = auth

  return (
    <Router>
      {authenticated ? (
        <Switch>
          <Route exact path="/" component={Layout} />
        </Switch>
      ) : (
        <Route component={Login} />
      )}
    </Router>
  )
})
export default App
