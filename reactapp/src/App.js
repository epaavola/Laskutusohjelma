import React from 'react'
import Frontpage from './pages/Frontpage'
import Dashboard from './pages/Dashboard'
import UusiLasku from './pages/UusiLasku'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
                <>
                    <Switch>
                        <Route path="/" exact component={Frontpage} />
                        <Route path="/dashboard" exact component={Dashboard} />
                        <Route path="/uusilasku" exact component={UusiLasku} />
                    </Switch>
                </>
    </Router>
  )
}

export default App;
