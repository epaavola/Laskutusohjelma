import React from 'react'
import 'typeface-roboto'
import Login from '../components/LoginContent'
import Register from '../components/RegisterContent'
import NavigationBar from '../components/NavigationBar'

const Frontpage = (props) => {
      return (
            <>
                <NavigationBar store={props.store} />
                {window.location.pathname === ("/registration") ? <Register/> : <Login/>}
            </>
      );
    }

export default Frontpage