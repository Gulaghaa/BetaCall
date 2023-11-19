import React, { useEffect } from 'react'
import logo from '../assets/Dark.svg'
import input from '../assets/Icon.svg'
import image from '../assets/signUp.svg'
import SignUp from './SignUp'
import Input from './Input'
import { useState } from 'react'
import { Formik, useFormik } from "formik";
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import ReactCountryFlag from "react-country-flag"
import LanguageDropdown from './LanguageDropDown'




export default function LoginContainer({ getStatus, routing, changeLanguagetoAz, changeLanguagetoEng , selectLanguage }) {



    const [status, setStatus] = useState(false)
    const [signUpProcess, setSignUpProcess] = useState("continues")


    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            surname: '',
            password: '',
            confirmation: '',
            checked: [],

        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            name: Yup.string().min(3, 'Name cannot be shorter than three string').max(12, 'Name cannot be larger than twelve string').required('Name is required'),
            surname: Yup.string().required('Surname is required'),
            password: Yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.'),
            confirmation: Yup.string().required('Please, confirm your passport').oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: values => {
            console.log(values)
        }
    });

    useEffect(() => {
        getStatus(signUpProcess)

    }, [signUpProcess])



    const changeStatus = (status) => {
        setStatus(status)
        console.log('containerin statusudu', status)
        console.log(!status)
    }


    return (
        <div className='LoginContainer'>


            <div className="login_upper">
                <img src={logo} />
                <div style={{display:'flex' ,  justifyContent: 'center' , alignItems: 'center' , gap: '10px'}}>
                    <LanguageDropdown changeLanguagetoAz = {changeLanguagetoAz} changeLanguagetoEng = {changeLanguagetoEng}/>
                    <NavLink to='/sign-in'><button className='SignInButton'>{selectLanguage ? 'Daxil olun' : 'Sign In'}</button></NavLink>
                </div>
            </div>


            {signUpProcess == 'continues' ? <div className="signInfo">
                {!status ? <span>{selectLanguage ? 'BetaCall-a xoş gəlmisiniz' : 'Welcome to BetaCall' } <span> {selectLanguage ? 'Başlamaq üçün qeydiyyatdan keçin.' :'Sign Up to getting started.'}</span></span> : <span>{selectLanguage ?  'Özünüz haqqında bizə ətraflı məlumat verin' : 'Tell us more about yourself'}</span>
                }
                <span>{selectLanguage ? 'Davam etmək üçün məlumatlarınızı daxil edin' : 'Enter your details to proceed further'}</span>
            </div> : null}
            {signUpProcess == 'continues' || formik.isSubmitting == false ? <form onSubmit={formik.handleSubmit}>

                <Input src={input} text={selectLanguage ? 'E-poçt' : 'Email'} uniqId={'email'} values={formik.values.email} onchange={formik.handleChange} property={'email'} placeholder={selectLanguage ? 'E-poçtunuzu daxil edin' : 'Enter your email'} />
                <SignUp changeStatus={changeStatus} formik={formik} setSignUpProcess={setSignUpProcess} selectLanguage = {selectLanguage} />
            </form> : null}

            {signUpProcess == 'finished' || formik.isSubmitting == true ? <div className='SignUpFinish'>
                <img src={image} />
                <span>{selectLanguage ?  'Təşəkkür edirik': 'Thank you'}</span>
                <span>{selectLanguage ? `${formik.values.email} ünvanına bir e-poçt göndərdik` : `We have sent an email to ${formik.values.email}`}</span>
                <span>{selectLanguage ? 'Hesabınızı doğrulamaq üçün e-poçtdakı təsdiqləmə linkinə klikləyin' : 'Click confirmation link in the email to verify your account'}</span>
                <button style={{ cursor: 'pointer' }} className='buttonInsideFinish'>{selectLanguage ? 'E-poçtu yenidən göndərin' :'Resend Email'}</button>
            </div> : null}








        </div>
    )
}
