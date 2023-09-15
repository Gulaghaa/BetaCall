import React from 'react'
import logo from '../assets/Dark.svg'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import Input from './Input'
import input from '../assets/Icon.svg'
import pass from '../assets/Pass.svg'
import { Formik, useFormik } from "formik";
import * as Yup from 'yup';
import RadioInput from './RadioInput'
import LoginCarts from './LoginCarts';
import google from "../assets/Google.svg";
import facebook from "../assets/Facebook.svg";
import twitter from "../assets/Twitter.svg";
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'



export default function SignIn() {
    const formikvalue = useFormik({
        initialValues: {
            emailvalue: '',
            passwordvalue: '',
            checked: [],

        },
        validationSchema: Yup.object().shape({
            emailvalue: Yup.string().email('Invalid email address').required('Email is required'),
            passwordvalue: Yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.'),
        }),
        onSubmit: values => {
            console.log(values)
        }
    });

    const { url, path } = useRouteMatch()
    console.log(url)



    return (
        <div className='SignIn'>
            <div className="login_upper">
                <img src={logo} />
                <NavLink to='/'><button className='SignInButton'>Sign Up</button></NavLink>
            </div>
            <div className='SignInContainer'>
                <div className='signInfo'>
                    <span>Welcome to BetaCall <span> Sign In to getting started.</span></span>
                    <span>Enter your details to proceed further</span>
                </div>
                <form onSubmit={formikvalue.handleSubmit}>
                    <Input src={input} text={'Email'} uniqId={'emailvalue'} values={formikvalue.values.emailvalue} onchange={formikvalue.handleChange} property={'email'} placeholder={'Enter your email'} />
                    <Input text={'Password'} src={pass} property={'password'} uniqId={'passwordvalue'} values={formikvalue.values.passwordvalue} onchange={formikvalue.handleChange} placeholder={'Enter your password'} />
                    <div className='rememberPart'>
                        <RadioInput text={'Remember me '} name={'checked'} onchange={formikvalue.handleChange} formik={formikvalue} values={'Remember'} />
                        <NavLink  className="rememberSpan" to={`${url}/recover`}>Recover password</NavLink>
                    </div>
                    <button
                        type="submit"
                        className="bigPurplebutton"

                        disabled={formikvalue.values.emailvalue == '' || formikvalue.errors.emailvalue || !formikvalue.values.checked.includes('Remember') ? true : false}
                        style={{ backgroundColor: formikvalue.values.emailvalue == '' || formikvalue.errors.emailvalue || formikvalue.values.passwordvalue == '' || formikvalue.errors.passwordvalue || !formikvalue.values.checked.includes('Remember') ? '#a090fb' : null, cursor: formikvalue.values.emailvalue == '' || formikvalue.errors.emailvalue || formikvalue.values.passwordvalue == '' || formikvalue.errors.passwordvalue || !formikvalue.values.checked.includes('Remember') ? 'not-allowed' : null }}
                    >Sign In</button>
                </form>
                <div className="orDiv">
                    <div></div>
                    <span>Or</span>
                    <div></div>
                </div>
                <div className="cartContainer">
                    <LoginCarts text={"Sign Up with Google"} src={google} />
                    <LoginCarts text={"Sign Up with Facebook"} src={facebook} />
                    <LoginCarts text={"Sign Up with Twitter"} src={twitter} />
                </div>
            </div>

        </div>
    )
}
