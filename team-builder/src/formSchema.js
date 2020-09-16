import * as yup from 'yup'

export default yup.object().shape({
  name: yup.string()
    .required('Username is required')
    .min(3, 'Username must be 6 characters or longer'),
  email: yup.string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: yup.string()
    .required('Password Required')
    .min(6, 'Password must be 6 characters or longer'),
  terms: yup.boolean()
    .required('Must agree to the terms'),
})