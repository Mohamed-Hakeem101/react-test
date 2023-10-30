import React, { useState } from 'react';
import { Alert, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { forgotSchema } from '../utils/Validation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(forgotSchema)
    })

    const [email , setEmail] = useState('')
    const [showAlert , setShowAlert] = useState(false)

    const handleClick = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false)
        }, 5000)
    }

    return (
        <div  className='form-outer-div'>
            {showAlert && (
                <Alert variant="outlined" severity="success" id='success-alert'>
                    Reset password successfully sent to {email}
                </Alert>
            )}
            <form onSubmit={handleSubmit(handleClick)}>
                <Typography variant='h5'>Forgot Password</Typography>

                <TextField
                    id="outlined-controlled"
                    label="Email"
                    type='email'
                    {...register('email')}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p>{errors.email?.message}</p>
                <Button variant="contained" type='submit'>Submit</Button>
                <Link to='/'>Login Page</Link>

            </form>
        </div>
    )
}

export default Login;