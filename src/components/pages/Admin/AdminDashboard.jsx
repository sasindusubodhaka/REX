import React from 'react'
import Layout from './Layout'
import Header from './Header'
import Sidebar from './Sidebar'
import { adminMenuItems } from './menuItems'
import { Grid, makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    margin: '20px',
    marginBottom: '0px',
  },
})

function AdminDashboard() {
  return (
    <Layout
      header={<Header user='Kasun' />}
      sidebar={<Sidebar menuItems={adminMenuItems} />}     
   
    ></Layout>
  )
}



export default AdminDashboard
