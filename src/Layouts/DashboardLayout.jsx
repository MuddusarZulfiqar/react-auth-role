import { Button, Paper } from '@mui/material'
import React from 'react'
import {Link, Outlet,useNavigate} from 'react-router-dom'
import { Stack, styled } from '@mui/system';
import useAuth from '../hooks/useAuth.js';
import request from '../util/request.js';

const Header= styled((Paper))(() => ({
  paddingBlock:'20px',
  paddingInline:'10px',
  marginBottom:'30px'
}));

const Name = styled(('h4'))(()=>({
  margin:0,
  fontSize:'18px',
  display:'inline-flex',
  alignItems:'end',
  marginRight:'50px',
}))

const CustomLink = styled((Link))(()=>({
  textDecoration:'none',
  fontWeight:'bold',
  color:'#000',
  marginRight:'15px'
}))
function DashboardLayout() {
  const navigate = useNavigate();
  const {auth,setAuth} = useAuth();
  const userLogout = async ()=>{
    try {
      await request.get('/logout');
      setAuth(null);
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
        <Header>
          <Stack direction={'row'} justifyContent='space-between'>
            <div style={{alignItems:'end',display:'flex'}}>
              <Name>{auth?.name || 'Non Login'}</Name>
              <CustomLink to={'/dashboard/profile'}>Profile</CustomLink>
              <CustomLink to={'/dashboard/admin'}>Admin</CustomLink>
            </div>
            <Button variant='contained' color="secondary" onClick={userLogout}>Logout</Button>
          </Stack>
        </Header>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout