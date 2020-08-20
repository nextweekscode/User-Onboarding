import * as yup from 'yup'

const formSchema = yup.object().shape({
    first_name: yup
    .string()
    .min(3,"Name must be atleast 3 characters long.")
    .required("Name is required."),
    email: yup
    .string()
    .email("Valid Email is Required")
    .required("Email is required"),
    password: yup
    .string()
    .min(6, "Password must be at least 6 characters long.")
    .required("Password is required."),
  



})

export default formSchema