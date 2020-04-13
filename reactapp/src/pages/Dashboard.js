import React from 'react'
import 'typeface-roboto'
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardContent from '../components/DashboardContent';

const Dashboard = ({store}) => {
    return (
        <>
          <DashboardNavbar store={store} />
          <DashboardContent />
        </>
      );
    }

export default Dashboard