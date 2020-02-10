import React from 'react'
import Frontpage from './pages/Frontpage'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
                <>
                    <Switch>
                        <Route path="/" exact component={Frontpage} />
                        <Route path="/dashboard" exact component={Dashboard} />
                    </Switch>
                </>
    </Router>
  )
}

export default App;
