import React from 'react'
import Frontpage from './pages/Frontpage'
import Dashboard from './pages/Dashboard'
import UusiLasku from './pages/UusiLasku'
import Rekisteroityminen from './pages/Rekisteroityminen'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
                <>
                    <Switch>
                        <Route path="/" exact component={Frontpage} />
                        <Route path="/dashboard" exact component={Dashboard} />
                        <Route path="/uusilasku" exact component={UusiLasku} />
                        <Route path="/rekisteroityminen" exact component={Rekisteroityminen} />
                    </Switch>
                </>
    </Router>
  )
}

export default App;
