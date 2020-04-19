import React from 'react'
import 'typeface-roboto'
import DashboardNavbar from '../components/DashboardNavbar'
import UusiLaskuContent from '../components/UusiLaskuContent'

const UusiLasku = ({store}) => {
    return (
        <>
          <DashboardNavbar store={store} />
          <UusiLaskuContent />
        </>
      )
    }

export default UusiLasku