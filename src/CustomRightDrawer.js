import { AppBar, Button, Drawer, Toolbar,Box } from '@mui/material'
import React, { useState } from 'react'

const CustomRightDrawer = () => {
  
    const[openDrawer, setOpenDrawer] = useState(false)  
    const rightDrawer =() =>{
        setOpenDrawer(true)
    }
    const rightDrawerClose = () =>{
        setOpenDrawer(false)
    }

    const[openLeftDrawer, setOpenLeftDrawer] =useState(false)
    const leftDrawer =() =>{
        setOpenLeftDrawer(true)
    }
    const leftDrawerClose = () => {
        setOpenLeftDrawer(false)
    }

    const[openTopDrawer, setOpenTopDrawer] =useState(false)
    const topDrawer =() => {
        setOpenTopDrawer(true)
    }
    const topDrawerClose =() =>{
        setOpenTopDrawer(false)
    }

    const[openBottomDrawer, setOpenBottomDrawer] = useState(false)
    const bottomDrawer =()=>{
        setOpenBottomDrawer(true)
    }
    const bottomDrawerClose =() =>{
        setOpenBottomDrawer(false)
    }
  return (
    <div>
      <AppBar>
        
        <Toolbar >
        <Button variant='outlined' color='inherit' onClick={rightDrawer}>right</Button>
        <Button variant='outlined' color='inherit' onClick={leftDrawer}>left</Button>
        <Button variant='outlined' color='inherit' onClick={topDrawer}>top</Button>
        <Button variant='outlined' color='inherit' onClick={bottomDrawer}>bottom</Button>
        </Toolbar> 
    
       
        
        
      </AppBar>
      <Drawer variant='temporary' anchor='right' open={openDrawer} onClose={rightDrawerClose}> Hello Right Drawer</Drawer>
      <Drawer variant='temporary' anchor='left' open={openLeftDrawer} onClose={leftDrawerClose}> Hello Left Drawer</Drawer>
      <Drawer variant='temporary' anchor='top' open={openTopDrawer} onClose={topDrawerClose}> Hello Top Drawer</Drawer>
      <Drawer variant='temporary' anchor='bottom' open={openBottomDrawer} onClose={bottomDrawerClose}> Hello Bottom Drawer</Drawer>
    </div>
  )
}

export default CustomRightDrawer
