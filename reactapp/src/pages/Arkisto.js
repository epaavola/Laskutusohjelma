import React from 'react'
import 'typeface-roboto'
import DashboardNavbar from '../components/DashboardNavbar'
import ArkistoContent from '../components/ArkistoContent'

const Arkisto = ({store}) => {
    return (
        <>
          <DashboardNavbar store={store} />
          <ArkistoContent />
        </>
      )
    }

export default Arkisto