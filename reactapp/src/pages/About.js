import React from 'react'
import 'typeface-roboto'
import DashboardNavbar from '../components/DashboardNavbar'
import AboutContent from '../components/AboutContent'

const About = ({store}) => {
    return (
        <>
          <DashboardNavbar store={store} />
          <AboutContent />
        </>
      )
    }

export default About