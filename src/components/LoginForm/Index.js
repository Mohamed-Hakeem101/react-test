import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../../features/user';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../utils/Validation';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import './LoginForm.css'



const Index = () => {

    // inputs validation using yup 
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const dispatch = useDispatch();

    // states for input fields 
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();


    return (
        <div className='form-outer-div'>
            <form onSubmit={handleSubmit(() => {
                const loginSuccess = dispatch(login({ name, password }));

                if (loginSuccess) {
                    navigate('/dashboard');
                }
            })}>
                <Typography variant='h5'>Login</Typography>

                <TextField
                    id="outlined-controlled"
                    label="Name"
                    type='text'
                    {...register("name")}
                    onChange={(e) => setName(e.target.value)}
                />
                <p>{errors.name?.message}</p>

                <TextField
                    id="outlined-adornment-password"
                    label="Password"
                    type='password'
                    {...register("password")}
                    onChange={(e) => setPassword(e.target.value)}
                    
                />
                <p>{errors.password?.message}</p>


                <Button variant="contained" type='submit'>Login <LoginIcon sx={{ marginLeft: '5px' }} /></Button>
                <Link to='/forgot-password'>Forgot Password</Link>
            </form>
        </div>
    )
}

export default Index