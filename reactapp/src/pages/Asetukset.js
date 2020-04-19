import React from 'react'
import 'typeface-roboto'
import DashboardNavbar from '../components/DashboardNavbar'
import AsetuksetContent from '../components/AsetuksetContent'

const Asetukset = ({store}) => {
    return (
        <>
          <DashboardNavbar store={store} />
          <AsetuksetContent />
        </>
      )
    }

export default Asetukset