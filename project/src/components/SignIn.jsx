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
import LanguageDropdown from './LanguageDropDown'



export default function SignIn({ changeLanguagetoAz, changeLanguagetoEng, selectLanguage }) {
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
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                    <LanguageDropdown changeLanguagetoAz={changeLanguagetoAz} changeLanguagetoEng={changeLanguagetoEng} />
                    <NavLink to='/'><button className='SignInButton'>{selectLanguage ? 'Qeydiyyatdan keçin' : 'Sign Up'  }</button></NavLink>
                </div>
            </div>
            <div className='SignInContainer'>
                <div className='signInfo'>
                    <span>{selectLanguage ? 'BetaCall-a xoş gəlmisiniz' : 'Welcome to BetaCall' }<span>{selectLanguage ? "Başlamaq üçün daxil olun." : "Sign In to getting started."}</span></span>
                    <span>{selectLanguage ? 'Davam etmək üçün məlumatlarınızı daxil edin' : 'Enter your details to proceed further'}</span>
                </div>
                <form onSubmit={formikvalue.handleSubmit}>
                    <Input src={input} text={selectLanguage ? 'E-poçt' :'Email'} uniqId={'emailvalue'} values={formikvalue.values.emailvalue} onchange={formikvalue.handleChange} property={'email'} placeholder={selectLanguage ? 'E-poçtunuzu daxil edin' :'Enter your email'} />
                    <Input text={selectLanguage ? 'Şifrə' : 'Password'} src={pass} property={'password'} uniqId={'passwordvalue'} values={formikvalue.values.passwordvalue} onchange={formikvalue.handleChange} placeholder={selectLanguage ? 'Şifrənizi daxil edin' : 'Enter your password'} />
                    <div className='rememberPart'>
                        <RadioInput text={selectLanguage ? 'Məni xatırla' : 'Remember me '} name={'checked'} onchange={formikvalue.handleChange} formik={formikvalue} values={'Remember'} />
                        <NavLink className="rememberSpan" to={`${url}/recover`}>{selectLanguage ? 'Şifrəni bərpa edin' : 'Recover password'}</NavLink>
                    </div>
                    <button
                        type="submit"
                        className="bigPurplebutton"
                        disabled={formikvalue.values.emailvalue == '' || formikvalue.errors.emailvalue || !formikvalue.values.checked.includes('Remember') ? true : false}
                        style={{ backgroundColor: formikvalue.values.emailvalue == '' || formikvalue.errors.emailvalue || formikvalue.values.passwordvalue == '' || formikvalue.errors.passwordvalue || !formikvalue.values.checked.includes('Remember') ? '#a090fb' : null, cursor: formikvalue.values.emailvalue == '' || formikvalue.errors.emailvalue || formikvalue.values.passwordvalue == '' || formikvalue.errors.passwordvalue || !formikvalue.values.checked.includes('Remember') ? 'not-allowed' : null }}
                    >{selectLanguage ? 'Daxil olun' : 'Sign In'}</button>
                </form>
                <div className="orDiv">
                    <div></div>
                    <span>{selectLanguage ? 'Və Ya' : 'Or'}</span>
                    <div></div>
                </div>
                <div className="cartContainer">
                    <LoginCarts text={selectLanguage ? 'Google ilə daxil olun' : "Sign In with Google"} src={google} />
                    <LoginCarts text={selectLanguage ? 'Facebook ilə daxil olun' : "Sign In with Facebook"} src={facebook} />
                    <LoginCarts text={selectLanguage ? 'Twitter ilə daxil olun' : "Sign In with Twitter"} src={twitter} />
                </div>
            </div>

        </div>
    )
}
