import React from 'react'
import Layout from '../Layout'
import Header from '../Header'
import AdminSideBar from '../Sidebar'
import Service from './Service'
import { adminMenuItems } from '../menuItems'


function AddDoctorBase() {

  return (
    <Layout
      header={<Header />}   
      sidebar={<AdminSideBar menuItems={adminMenuItems} />}
      content={
        <div style={{ padding: '20px' }}>
          <Service />
    
        </div>
      }
    ></Layout>
  )
}

export default AddDoctorBase ;