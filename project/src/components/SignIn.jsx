import React, { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import Input from './Input';
import inputIcon from '../assets/Icon.svg';
import passIcon from '../assets/Pass.svg';
import { useFormik } from "formik";
import * as Yup from 'yup';
import RadioInput from './RadioInput';
import LoginCarts from './LoginCarts';
import googleIcon from "../assets/Google.svg";
import facebookIcon from "../assets/Facebook.svg";
import twitterIcon from "../assets/Twitter.svg";
import LanguageDropdown from './LanguageDropDown';
import axios from 'axios';
import logo from '../assets/Dark.svg';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

export default function SignIn({ changeLanguagetoAz, changeLanguagetoEng, selectLanguage }) {
    const [loginError, setLoginError] = useState('');
    const history = useHistory();
    const {url} = useRouteMatch()

    const formikValue = useFormik({
        initialValues: {
            emailvalue: '',
            passwordvalue: '',
            checked: [],
        },
        validationSchema: Yup.object().shape({
            emailvalue: Yup.string().email('Invalid email address').required('Email is required'),
            passwordvalue: Yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.'),
        }),
        onSubmit: (values, { setSubmitting }) => {
            axios.get('http://localhost:3003/registration')
                .then(response => {
                    const user = response.data.find(user => user.email === values.emailvalue && user.password === values.passwordvalue);
                    if (user) {
                        history.push('/dashboard/home'); 
                    } else {
                        setLoginError('Invalid email or password');
                        alert('Invalid email or password'); 
                    }
                })
                .catch(error => {
                    console.error('Login error:', error);
                    setLoginError('An error occurred during login. Please try again.');
                    alert('An error occurred during login. Please try again.'); 
                })
                .finally(() => {
                    setSubmitting(false);
                });
        },
    });

    return (
        <div className='SignIn'>
            <div className="login_upper">
                <img src={logo} alt="logo" />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                    <LanguageDropdown changeLanguagetoAz={changeLanguagetoAz} changeLanguagetoEng={changeLanguagetoEng} selectLanguage={selectLanguage} />
                    <NavLink to='/'><button className='SignInButton'>{selectLanguage ? 'Qeydiyyatdan keçin' : 'Sign Up'}</button></NavLink>
                </div>
            </div>
            <div className='SignInContainer'>
                <div className='signInfo'>
                    <span>{selectLanguage ? 'BetaCall-a xoş gəlmisiniz' : 'Welcome to BetaCall'}<span>{selectLanguage ? "Başlamaq üçün daxil olun." : "Sign In to getting started."}</span></span>
                    <span>{selectLanguage ? 'Davam etmək üçün məlumatlarınızı daxil edin' : 'Enter your details to proceed further'}</span>
                </div>
                <form onSubmit={formikValue.handleSubmit}>
                    <Input src={inputIcon} text={selectLanguage ? 'E-poçt' : 'Email'} uniqId={'emailvalue'} values={formikValue.values.emailvalue} onchange={formikValue.handleChange} property={'email'} placeholder={selectLanguage ? 'E-poçtunuzu daxil edin' : 'Enter your email'} />
                    <Input text={selectLanguage ? 'Şifrə' : 'Password'} src={passIcon} property={'password'} uniqId={'passwordvalue'} values={formikValue.values.passwordvalue} onchange={formikValue.handleChange} placeholder={selectLanguage ? 'Şifrənizi daxil edin' : 'Enter your password'} />
                    <div className='rememberPart'>
                        <RadioInput text={selectLanguage ? 'Məni xatırla' : 'Remember me'} name={'checked'} onchange={formikValue.handleChange} formik={formikValue} values={'Remember'} />
                        <NavLink className="rememberSpan" to={`${url}/recover`}>{selectLanguage ? 'Şifrəni bərpa edin' : 'Recover password'}</NavLink>
                    </div>
                    <button
                        type="submit"
                        className="bigPurplebutton"
                        disabled={formikValue.values.emailvalue == '' || formikValue.errors.emailvalue || !formikValue.values.checked.includes('Remember') ? true : false}
                        style={{
                            backgroundColor: formikValue.isSubmitting || !formikValue.isValid ? '#a090fb' : null,
                            cursor: formikValue.isSubmitting || !formikValue.isValid ? 'not-allowed' : null
                        }}
                    >{selectLanguage ? 'Daxil olun' : 'Sign In'}</button>
                </form>
                <div className="orDiv">
                    <div></div>
                    <span>{selectLanguage ? 'Və Ya' : 'Or'}</span>
                    <div></div>
                </div>
                <div className="cartContainer">
                    <LoginCarts text={selectLanguage ? 'Google ilə daxil olun' : "Sign In with Google"} src={googleIcon} />
                    <LoginCarts text={selectLanguage ? 'Facebook ilə daxil olun' : "Sign In with Facebook"} src={facebookIcon} />
                    <LoginCarts text={selectLanguage ? 'Twitter ilə daxil olun' : "Sign In with Twitter"} src={twitterIcon} />
                </div>
            </div>
        </div>
    );
}
