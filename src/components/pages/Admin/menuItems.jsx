import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PersonIcon from '@material-ui/icons/Person'




export const adminMenuItems = [
  {
    icon: <DashboardIcon style={{ color: '#fff' }} />,
    name: 'Dashboard',
    url: '/admin/dashboard',
  },
  {
    icon: <PersonIcon style={{ color: '#fff' }} />,
    name: 'Add new services',
    url: '/admin/addservices'  
  },
  {
    icon: <PersonIcon style={{ color: '#fff' }} />,
    name: 'Add new Audio gears',
    url: '/admin/addaudiogears',

  }
 
]

