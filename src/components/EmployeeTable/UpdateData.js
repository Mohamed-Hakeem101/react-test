import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { EmployeeData_API } from '../../data/employees';
import { Link, useNavigate } from 'react-router-dom';



const UpdateData = () => {

    const [id, setId] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [role, setRole] = useState('')

    const navigate = useNavigate()

    const updateData = () => {
        axios.put(EmployeeData_API + '/' + id, {
            id,
            fname,
            lname,
            email,
            phone,
            address,
            role
        })
        navigate('/dashboard')
    }

    useEffect(() => {
        setId(localStorage.getItem('id'))
        setFname(localStorage.getItem('fname'))
        setLname(localStorage.getItem('lname'))
        setEmail(localStorage.getItem('email'))
        setPhone(localStorage.getItem('phone'))
        setAddress(localStorage.getItem('address'))
        setRole(localStorage.getItem('role'))
    }, [])

    return (
        <div className='form-outer-div'>
            <Box
                component='form'
                onSubmit={updateData}
            >
                <Typography variant='h5'>Update Data</Typography>

                <TextField
                    id="outlined-controlled"
                    label="Id"
                    type='text'
                    value={id}
                    disabled
                />

                <TextField
                    id="outlined-uncontrolled"
                    label="First name"
                    type='text'
                    value={fname}
                    onChange={e => setFname(e.target.value)}
                />

                <TextField
                    id="outlined-uncontrolled"
                    label="Last name"
                    type='text'
                    value={lname}
                    onChange={e => setLname(e.target.value)}
                />

                <TextField
                    id="outlined-uncontrolled"
                    label="Email"
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <TextField
                    id="outlined-uncontrolled"
                    label="Phone"
                    type='number'
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />

                <TextField
                    id="outlined-uncontrolled"
                    label="Address"
                    type='address'
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />

                <TextField
                    id="outlined-uncontrolled"
                    label="Role"
                    type='text'
                    value={role}
                    onChange={e => setRole(e.target.value)}
                />

                <Button variant="contained" type='submit'>Update</Button>
                <Link to='/employee-table'>Go Back</Link>
            </Box>
        </div>
    )
}

export default UpdateData