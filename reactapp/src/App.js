import React from 'react'
import Frontpage from './pages/frontpage'
import Dashboard from './pages/Dashboard'
import UusiLasku from './pages/UusiLasku'
import Asiakkaat from './pages/Asiakkaat'
import Arkisto from './pages/Arkisto'
import FAQ from './pages/FAQ'
import About from './pages/About'
import Asetukset from './pages/Asetukset'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

const App = () => {
  return (
    <Router>
                <>
                    <Switch>
                        <Route path="/" exact component={Frontpage} />
                        <AuthenticatedPath path="/dashboard" exact component={Dashboard} />
                        <AuthenticatedPath path="/uusilasku" exact component={UusiLasku} />
                        <Route path="/registration" exact component={Frontpage} />
                        <AuthenticatedPath path="/asiakkaat" exact component={Asiakkaat} />
                        <AuthenticatedPath path="/arkisto" exact component={Arkisto} />
                        <AuthenticatedPath path="/asetukset" exact component={Asetukset} />
                        <Route path="/FAQ" exact component={FAQ} />
                        <Route path="/tietoameista" exact component={About} />
                    </Switch>
                </>
    </Router>
  )
}


const AuthenticatedPath = ({component : Component, ...rest}) => (
  <Route
    {...rest}
    render={props => 
      localStorage.getItem('auth') ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: "/",
          state: { from: props.location }
        }}
      />
    )
  }
/>
);

export default App;
