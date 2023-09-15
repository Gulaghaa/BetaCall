import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import logo from '../assets/Dark.svg'
import strange from '../assets/strange.svg'
import Input from './Input'
import input from '../assets/Icon.svg'
import { Formik, useFormik } from "formik";
import * as Yup from 'yup';



export default function Recover() {
    const getFormik = useFormik({
        initialValues: {
            getemail: '',
        },
        validationSchema: Yup.object().shape({
            getemail: Yup.string().email('Invalid email address').required('Email is required'),
        }),
        onSubmit: values => {
            console.log(values)
        }
    });
    return (
        <div className='recover'>
            <div className="login_upper">
                <img src={logo} />
                <NavLink to='/'><button className='SignInButton'>Sign Up</button></NavLink>
            </div>
            <div className='strangeImage'>
                <img src={strange} />
            </div>
            <div className='signInfo' style={{ marginTop: '35px' }}>
                <span>Lost your password?<span>Enter your details to recover.</span></span>
                <span>Enter your details to proceed further</span>
            </div>
            <form onSubmit={getFormik.handleSubmit}>
                <Input src={input} text={'Email'} uniqId={'getemail'} values={getFormik.values.getemail} onchange={getFormik.handleChange} property={'email'} placeholder={'Enter your email'} />
                <button
                    type="submit"
                    className="bigPurplebutton"
                    s

                    disabled={getFormik.values.getemail == '' || getFormik.errors.getemail ? true : false}
                    style={{ backgroundColor: getFormik.values.getemail == '' || getFormik.errors.getemail ? '#a090fb' : null, cursor: getFormik.values.getemail == '' || getFormik.errors.getemail ? 'not-allowed' : null , marginTop: '35px' ,marginBottom: '187px' }}
                >Recover</button>
            </form>
        </div>
    )
}
