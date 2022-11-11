import { AppBar, Box, Divider, Drawer, List, LinkTab,ListItemButton, ListItemText, Toolbar, Typography, Tabs } from '@mui/material'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import WavesIcon from '@mui/icons-material/Waves';
import HotTubIcon from '@mui/icons-material/HotTub';
import HybridGeyser from './HybridGeyser';
import React from 'react'
import { blue } from '@mui/material/colors';
import { useState } from 'react';

const Rubitron = () => {

  const [value, setValue] =useState(0)

  const handleChange = (event, newValue) =>{
      setValue(newValue)
  };
  return (
    <div>
      <AppBar position='fixed' sx={{bgcolor:'#3f51b5', zIndex: 111111, height: "9%"}}>
        <Toolbar>
          
            <Typography sx={{ fontSize:'0.8rem', p:1, opacity:0.6}}>RubiTron Labs</Typography>
            <Box sx={{display: 'flex',
            flexDirection: 'row',
            // justifyContent: 'flex-end',
            // alignItems: 'flex-end',
            p: 1,
            m: 125,

            
            height:30,
            }}>

            <ListItemButton>
              <NotificationsNoneOutlinedIcon fontSize='small'   />
            </ListItemButton>
            
            <ListItemButton>
              <SettingsOutlinedIcon fontSize='small'/>
            </ListItemButton>
            <ListItemButton>
              <ExitToAppOutlinedIcon fontSize='small' sx={{mr:1.5}}/>
              <Typography sx={{fontWeight:'bold' , fontSize:'0.7rem'}}>SIGN OUT</Typography>
              </ListItemButton>
            </Box>
         
        </Toolbar>
      </AppBar>
      <Drawer variant='permanent'  PaperProps={{sx: { width: 210}}}>
        <Box sx ={{pt:10, width:'100%'}}/>
        <Box sx={{height:60}}>
        <Typography sx={{pt:'10', paddingBottom: '90' ,fontWeight:'bold', fontSize:'1rem'}}>RubiTron Labs</Typography>
        <Typography sx={{pt:'110' , fontWeight:'bold' , fontSize:'0.7rem', opacity:'0.7',mt:1}}>User</Typography>
        </Box>

        <Divider/>
        <Toolbar>
          <List>
            
            <ListItemButton value={value}
            onChange={handleChange}
            label="Hybrid Geyser"
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            href= "./HybridGeyser"
            sx={{pl:0, width: 155, justifyContent:'space-between'}}>
              
              <HotTubIcon/><Typography sx={{ fontWeight:'bold' ,width:100, fontSize:'0.6rem', opacity:'1'}}>Smart Hybrid Geyser System</Typography>
            </ListItemButton>
            
          <ListItemButton  sx={{pl:0,mt:1, width: 145,justifyContent:'space-between'}}>
              
              <WavesIcon/>
              <Typography sx={{fontWeight:'bold' , fontSize:'0.6rem', opacity:'1'}}>Water Tank System</Typography>
        
            </ListItemButton>
          </List>
        </Toolbar>
        
        
      </Drawer>
      <Box>
        
      </Box>
      {/* <Box sx={{bgcolor:'#e2e2e2', ml:0, height:"100%"}}> */}
      <Box sx={{align:'center',
          justifyContent: 'flex-end',bgcolor:'primary' ,ml:40 ,mt:10,width:"70%" }}><HybridGeyser/></Box>
      {/* </Box> */}
    </div>
  )
}

export default Rubitron
