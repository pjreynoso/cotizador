import React from 'react'
import { Switch, Route, Redirect , BrowserRouter as Router } from 'react-router-dom'
import Login from './Login'
import Steps from './Steps'
import Thanks from './Thanks'

const App = () => {
  return (
    <Router>
      <div className='content'>
        <Switch>
          <Route path='/' exact>
            <Login />
          </Route>
          <Route path='/process'>
            <Steps />
          </Route>
          <Route path='/thanks'>
            <Thanks />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App