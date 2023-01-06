import React from 'react'
import '../css/registration.css'
import { useFormik} from "formik";
import { signUpSchema } from '../schemas';

const initialValues ={
    name: "",
    email:"",
    password : "",
    confirm_password : ""
}
const Registration = () => {

    const {values,touched, handleBlur,handleChange,errors,handleSubmit} = useFormik({
        initialValues,
        validationSchema : signUpSchema,
       // Hear values are come from initialValues 
        onSubmit : (values,action)=>{
            console.log(
                "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
                values)
            action.resetForm();
        }
    })

    console.log(
        "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
        errors
      );
  return (
    <div className="form">
        <form onSubmit={handleSubmit}>
    <div className="form-body">
       
        <div className="lastname">
            <label className="form__label" htmlFor="lastName"> Name </label>
            <input  type="text" name="name" id="lastName"  className="form__input"placeholder="LastName" value={values.name} onChange = {handleChange} onBlur={handleBlur}/>
               {errors.name && touched.name && <div style={{color : "red"}}>{errors.name} </div>}
        </div>
        <div className="email">
            <label className="form__label" htmlFor="email">Email </label>
            <input  type="email" id="email" name= "email"className="form__input" placeholder="Email" value={values.email} onChange = {handleChange} onBlur={handleBlur}/>
            {errors.email && touched.email &&<div style={{color : "red"}}>{errors.email} </div>}
         </div>
        <div className="password">
            <label className="form__label" htmlFor="password">Password </label>
            <input className="form__input" name="password" type="password"  id="password" placeholder="Password" value={values.password} onChange = {handleChange} onBlur={handleBlur} />
            {errors.password && touched.password &&<div style={{color : "red"}}>{errors.password} </div>}
        </div>
        <div className="confirm-password">
            <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
            <input className="form__input" name="confirm_password" type="password" id="confirmPassword" placeholder="Confirm Password"  value={values.confirm_password} onChange = {handleChange} onBlur={handleBlur}/>
            {errors.confirm_password && touched.confirm_password &&<div style={{color : "red"}}>{errors.confirm_password} </div>}
        </div>
    </div>
    <div className="footer">
        <button type="submit" className="btn">Register</button>
    </div>
    </form>
</div>      
  )
}

export default Registration