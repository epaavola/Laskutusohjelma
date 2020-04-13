import React from 'react'
import 'typeface-roboto'
import DashboardNavbar from '../components/DashboardNavbar'
import FAQContent from '../components/FAQContent'

const FAQ = ({store}) => {
    return (
        <>
          <DashboardNavbar store={store} />
          <FAQContent />
        </>
      )
    }

export default FAQ