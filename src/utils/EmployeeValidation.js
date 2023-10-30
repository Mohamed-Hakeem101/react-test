import * as yup from 'yup'

export const employeeSchema = yup.object().shape({
    fname: yup.string().required('Firstname is required'),
    lname: yup.string().required('Lastname is required'),
    email: yup.string().email('Please enter a valid email').required('Email is required'),
    phone: yup.string().required('Phone number is required').min(10, 'Enter a valid number'),
    address: yup.string().required('Address is required'),
    role: yup.string().required('Role is required')
})

