import React, { useState } from 'react'
import { Accordion, AccordionSummary, Card, Grid, Tab, Typography } from '@mui/material'
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

// import LinkTab 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HybridGeyser = () => {
    const [value, setValue] =useState(0)

  const handleChange = (event, newValue) =>{
      setValue(newValue)
  };
  return (
    <div sx={{bgcolor:'#e2e2e2'}}>
      <Accordion>
            <AccordionSummary 
            
            expandIcon={<ExpandMoreIcon sx={{fill: 'white' }}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{color: 'white',
            background: 'linear-gradient(180deg,#66bb6a 0%, #43a047 100%)' ,height:'10'}}>
            <Typography>Geyser On</Typography>

            </AccordionSummary>
            <AccordionDetails>
            <Box sx={{bgcolor:'background.paper' ,width:"100%" , height:10, 
          bgcolor: 'background.paper',
          borderRadius: 25,
        
        
        }}>
      
      <Paper elevation={3} sx={{width:"100%  ", display: 'flex',
          justifyContent: 'center'}}>
      <Tabs>
      <Tab 
      // value="one"
      label="Overview"
      href ="/Tab1"
      />
    <Tab
      // value="two"
      label="Setting"
      href= "/Tab2"
      />
    
    </Tabs>
    </Paper>
    </Box>

    
    {/* <Paper elevation={0} sx={{mt:10}}>hello</Paper> */}

    {/* <Box elevation={5} sx={{width:'50%', bgcolor:'#f2f2f2', height:80 ,borderRadius:2 , display:'flex', flexDirection:'row', mt:6 , justifyContent: 'space-between' }}>
        <Box sx={{
          display:'flex',
          flexDirection:'column', p:2.5
        }}>
          <Typography sx={{fontSize:'0.5rem' , fontWeight:'bold', opacity:'0.7'}}>GEYSER STATUS</Typography>
          <Typography variant='h5' sx={{fontWeight:'bold'}}>On</Typography>
        </Box>
        
        <Box sx={{p:2.5}}>
          <Avatar sx={{background: 'linear-gradient(180deg,#66bb6a 0%, #43a047 100%)'}}><PowerSettingsNewIcon  sx={{fontSize:'1.2rem', fontWeight:'bold'
          }}/>
          </Avatar>
        </Box>
        
    </Box> */}

    {/* <Box sx={{display: 'flex', justifyContent: 'space-between', direction:'row', flexWrap: 'wrap'}}> */}
    
      <Card  elevation= {1} sx={{ border:'1px solid red' , bgcolor:'#f2f2f2' ,maxWidth: "50%"  , mt:'50px' , height:80 ,display:'flex', justifyContent:'space-between'}}>
        <Box sx={{
              display:'flex',
              flexDirection:'column', p:2.5
            }}>
              <Typography sx={{fontSize:'0.5rem' , fontWeight:'bold', opacity:'0.7'}}>GEYSER STATUS</Typography>
              <Typography variant='h5' sx={{fontWeight:'bold'}}>On</Typography>
        </Box>

        <Box sx={{p:2.5}}>
            <Avatar sx={{background: 'linear-gradient(180deg,#66bb6a 0%, #43a047 100%)'}}><PowerSettingsNewIcon  sx={{fontSize:'1.2rem', fontWeight:'bold'
            }}/>
            </Avatar>
        </Box>
      </Card>
    
    

    <Card elevation= {1} sx={{ bgcolor:'#f2f2f2',border:'1px solid red' ,maxWidth: "50%"  , height:80 ,display:'flex'}}></Card>
  
    {/* </Box> */}
            </AccordionDetails>

      </Accordion>
      
    </div>
  )
}

export default HybridGeyser
