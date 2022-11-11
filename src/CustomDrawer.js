import { AppBar, Button, Drawer, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const CustomDrawer = () => {
  const [openDrawer, setOpenDrawer]= useState(false)
  const handleOpenDrawer =() => {
    setOpenDrawer(true)
  }
  const handleDrawerClose = () => {
    setOpenDrawer(false)
  }
  return (
    <div>
     <AppBar position='fixed'  style={{zIndex: 111111}}>
      <Toolbar>
    <Button variant='outlined' color='inherit' onClick={handleOpenDrawer}>
      Open Drawer
    </Button>
      </Toolbar>
     </AppBar>
     <Drawer variant='temporary' open={openDrawer} onClose={handleDrawerClose}  > 
     Hello Form Drawer  
     </Drawer>
     {/* <Drawer variant='permanent'>
      <Toolbar /> 
      <Typography>
        Hello from Drawer
      </Typography>
     </Drawer> */}
    </div>
  )
}

export default CustomDrawer

