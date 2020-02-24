import React from 'react'
import Frontpage from './pages/frontpage'
import Dashboard from './pages/Dashboard'
import UusiLasku from './pages/UusiLasku'
import Rekisteroityminen from './pages/Rekisteroityminen'
import Asiakkaat from './pages/Asiakkaat'
<<<<<<< HEAD
=======
import Arkisto from './pages/Arkisto'
import FAQ from './pages/FAQ'
import About from './pages/About'
import Asetukset from './pages/Asetukset'
>>>>>>> 45877cae19355966eed65a73215fc1d378ce71f6
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
                        <Route path="/asiakkaat" exact component={Asiakkaat} />
<<<<<<< HEAD
=======
                        <Route path="/arkisto" exact component={Arkisto} />
                        <Route path="/asetukset" exact component={Asetukset} />
                        <Route path="/FAQ" exact component={FAQ} />
                        <Route path="/tietoameista" exact component={About} />
>>>>>>> 45877cae19355966eed65a73215fc1d378ce71f6
                    </Switch>
                </>
    </Router>
  )
}

export default App;
