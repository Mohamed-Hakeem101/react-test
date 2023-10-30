import axios from 'axios'
import React, { useState } from 'react'
import { EmployeeData_API } from '../../data/employees'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, TextField, Typography } from '@mui/material'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { employeeSchema }  from '../../utils/EmployeeValidation'

const AddUser = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(employeeSchema)
    })

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [role, setRole] = useState('')

    const navigate = useNavigate()

    const addUser = async() => {
        await axios.post(EmployeeData_API, {
            fname,
            lname,
            email, 
            phone,
            address,
            role
        })
        navigate('/employee-table')
    }
  return (
    <div className='form-outer-div'>
            <Box
                component='form'
                onSubmit={handleSubmit(addUser)}
            >
                <Typography variant='h5'>Add User Data</Typography>
                <TextField
                    id="outlined-uncontrolled"
                    label="First name"
                    type='text'
                    value={fname}
                    {...register('fname')}
                    onChange={e => setFname(e.target.value)}
                />
                <p>{errors.fname?.message}</p>
                
                <TextField
                    id="outlined-uncontrolled"
                    label="Last name"
                    type='text'
                    value={lname}
                    {...register('lname')}
                    onChange={e => setLname(e.target.value)}
                />
                <p>{errors.lname?.message}</p>
                
                <TextField
                    id="outlined-uncontrolled"
                    label="Email"
                    type='email'
                    value={email}
                    {...register('email')} 
                    onChange={e => setEmail(e.target.value)}
                />
                <p>{errors.email?.message}</p>
                
                <TextField
                    id="outlined-uncontrolled"
                    label="Phone"
                    type='number'
                    value={phone}
                    {...register('phone')}
                    onChange={e => setPhone(e.target.value)}
                />
                <p>{errors.phone?.message}</p>
                
                <TextField
                    id="outlined-uncontrolled"
                    label="Address"
                    type='text'
                    value={address}
                    {...register('address')}
                    onChange={e => setAddress(e.target.value)}
                />
                <p>{errors.address?.message}</p>
                
                <TextField
                    id="outlined-uncontrolled"
                    label="Role"
                    type='text'
                    value={role}
                    {...register('role')}
                    onChange={e => setRole(e.target.value)}
                />
                <p>{errors.role?.message}</p>
                <Button variant="contained" type='submit'>Sumbit</Button>
                <Link to='/employee-table'>Go Back</Link>
            </Box>
        </div>
  )
}

export default AddUser