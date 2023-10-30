import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    name: yup.string().required("Usename is required!"),
    password: yup.string().required("Password is required!").min(6, 'Minimum 6 chars is required')
})

export const forgotSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('Email is required')
})

