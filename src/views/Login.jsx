import React, { useState,useContext } from 'react'
import {Button,Stack,TextField} from '@mui/material';
import request from '../util/request';
import { toast } from 'react-toastify';
import AuthContext from '../context/AuthProvider';
import {useNavigate,useLocation} from 'react-router-dom';

import {Container} from '../components/Theme';
function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/dashboard/profile'
    const {setAuth} = useContext(AuthContext)
    const [user,setUser] = useState({
        email:'',
        password:''
    });

    const changeHandler = (event)=>{
        setUser({
            ...user,
            [event.target.name]:event.target.value
        })
    }
    const login = async (e)=>{
        e.preventDefault();
        try {
            const response = await request.post('login',user);
            console.log(response);
            toast.success('Login Success');
            setAuth(response.data.user);
            navigate(from,{replace:true})
        } catch (error) {
            toast.error(error.response?.data?.message)
        //  console.log(error)   
        }
    }
  return (
    <div>
        <Stack justifyContent={'center'} sx={{height:'100vh'}}  component='form' onSubmit={login}>
            <Container>
                <TextField name='email' type='email' label="Email" variant="outlined" required  onChange={changeHandler} sx={{mb:2}}/>
                <TextField name='password' type='password' label="Password" required  variant="outlined" onChange={changeHandler} sx={{mb:3}} />
                <Button type='submit' variant='contained'  color='secondary'>Login</Button>
            </Container>
            
        </Stack>
    </div>
  )
}

export default Login