import * as Yup from 'yup';


export const signUpSchema = Yup.object({
// name : Yup.string().min(2).max(25).required("Please enter your name "),
// email : Yup.string().email().required("please enter your email"),
// password : Yup.string().min(3).required("Please enter password"),
// confirm_password : Yup.string().required().oneOf([Yup.ref('password'),null],"Password must match"),


name: Yup.string().min(2).max(35).required("Name is required field"),
bank_name:Yup.string().min(3).max(35).required("Bank name is required field") ,

number:Yup.string().min(16).max(16).required("Card number is required field"),
cvv:Yup.string().min(3).max(3).required("Cvv is mandatory"),
})