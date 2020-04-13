import React, {useEffect} from 'react'
import Frontpage from './pages/Frontpage'
import Dashboard from './pages/Dashboard'
import UusiLasku from './pages/UusiLasku'
import Asiakkaat from './pages/Asiakkaat'
import Arkisto from './pages/Arkisto'
import FAQ from './pages/FAQ'
import About from './pages/About'
import Asetukset from './pages/Asetukset'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

const App = ({store}) => {

  useEffect(() => {
    if(localStorage.getItem("language")===null){
      store.getState();
    }
  });

  return (
    <Router>
                <>
                    <Switch>
                        <Route path="/" store={store} exact component={Frontpage} />
                        <AuthenticatedPath path="/dashboard" component={Dashboard} store={store} />
                        <AuthenticatedPath path="/uusilasku" store={store} exact component={UusiLasku} />
                        <Route path="/registration" component={Frontpage} store={store} />
                        <AuthenticatedPath path="/asiakkaat" store={store} exact component={Asiakkaat} />
                        <AuthenticatedPath path="/arkisto" store={store} exact component={Arkisto} />
                        <AuthenticatedPath path="/asetukset" store={store} exact component={Asetukset} />
                        <Route path="/FAQ" store={store} exact component={FAQ} />
                        <Route path="/tietoameista" store={store} exact component={About} />
                    </Switch>
                </>
    </Router>
  )
}


const AuthenticatedPath = ({component : Component, store, ...rest}) => (
  <Route
    {...rest}
    render={props => 
      localStorage.getItem('auth') ? (
      <Component {...props} store={store}/>
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
