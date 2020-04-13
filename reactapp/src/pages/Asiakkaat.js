import React from 'react'
import 'typeface-roboto'
import DashboardNavbar from '../components/DashboardNavbar'
import AsiakkaatContent from '../components/AsiakkaatContent'

const Asiakkaat = ({store}) => {
    return (
        <>
          <DashboardNavbar store={store} />
          <AsiakkaatContent />
        </>
      );
    }

export default Asiakkaat