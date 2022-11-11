import * as React from 'react';
import { Avatar, Badge, Button, Divider, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { deepOrange } from '@mui/material/colors';
import FacebookIcon from '@mui/icons-material/Facebook';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import ListItem from '@mui/material/ListItem';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicTextFields() {

  const [value, setValue] =useState(0)

  const handleChange = (event, newValue) =>{
      setValue(newValue)
  };
  return (
    <>
    <Box sx={{width: "100%"}}>
      <Tabs
      value={value}
      onChange={handleChange}
    >
      <LinkTab
      // value="one"
      label="Tab 1"
      href ="/Tab1"

      />

    <LinkTab
      // value="two"
      label="Tab 2"
      href= "/Tab2"
      />

    <LinkTab
      // value="three"
      label="Tab 3"
      />
    </Tabs>
    </Box>
    <TextField
    label="Enter Your Name"
    variant='standard'
    />

    <Stack direction="row">
    <Avatar> A </Avatar>
    <Avatar sx={{bgcolor: deepOrange[500]}}>H</Avatar>
    <Avatar>M</Avatar>
    <Avatar sx={{bgcolor: deepOrange[500]}}>E</Avatar>
    <Avatar>D</Avatar>

    </Stack>

    <Badge badgeContent={6} color="secondary">
        <Avatar>msg</Avatar>
    </Badge><hr/>
    <Tooltip title="Facebook">
    <FacebookIcon/>
    </Tooltip>

    <Tooltip title="Delete">
      <DeleteIcon/>
    </Tooltip>

    <Typography variant="h1" gutterBottom>ALerts</Typography>

    <Stack sx={{width:'100%'}} spacing={2}>
        <Alert severity='warning'>This is warning</Alert>
        <Alert severity='info'> This is info</Alert>
        <Alert severity='success'>This is success!</Alert>
        <Alert severity='error'> This is error! check it out</Alert>
    </Stack>

    <Stack direction="row"  
    divider={<Divider orientation='vertical' flexItem/>}
    spacing={3}>
      <Stack>Ahmed</Stack>
      <Stack>Mustafa</Stack>
    </Stack>
    <Typography variant='h3'>Container</Typography>
    <Container>
      <Box sx={{bgcolor:'#cfe8fc', height:'40vh'}}>
      <Typography variant='h3'>Hello!</Typography> </Box>
    </Container>

    <Box component="span" sx={{ p:2, border:'1px dashed grey'}}>
      <Button>Box</Button>
    </Box>
    <Typography variant='h1'>Grid</Typography>
    <Box sx={{flexGrow:1}}>
      <Grid container spacing ={2}>
        <Grid item xs={8}>
          <Item>xs= 8</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs= 3</Item>
        </Grid>
        <Grid item xs={1}>
          <Item>xs= 1</Item>
        </Grid>
        <Grid item xs={12}>
          <Item>xs= 12</Item>
        </Grid>
      </Grid>
    </Box>

    </>
  );
}
