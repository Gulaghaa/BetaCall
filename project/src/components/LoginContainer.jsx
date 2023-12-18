import React, { useEffect, useState } from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // Import useHistory

import logo from '../assets/Dark.svg';
import input from '../assets/Icon.svg';
import image from '../assets/signUp.svg';
import SignUp from './SignUp';
import Input from './Input';
import LanguageDropdown from './LanguageDropDown';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export default function LoginContainer({ getStatus, changeLanguagetoAz, changeLanguagetoEng, selectLanguage }) {
    const [status, setStatus] = useState(false);
    const [signUpProcess, setSignUpProcess] = useState("continues");
    const history = useHistory(); // Create an instance of useHistory

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
            name: Yup.string().min(3, 'Name cannot be shorter than three characters').max(12, 'Name cannot be larger than twelve characters').required('Name is required'),
            surname: Yup.string().required('Surname is required'),
            password: Yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.'),
            confirmation: Yup.string().required('Please, confirm your password').oneOf([Yup.ref('password'), null], 'Passwords must match'),
        }),
        onSubmit: async (values) => {
            try {
                const usersResponse = await axios.get('http://localhost:3003/registration');
                const users = usersResponse.data;
        
                const isEmailExists = users.some(user => user.email === values.email);
                const isPasswordExists = users.some(user => user.password === values.password);
        
                if (isEmailExists || isPasswordExists) {
                    setSignUpProcess('continues')
                    alert("Email or Password already in use. Please choose another.");
                    return;
                }
        
                const registerResponse = await axios.post('http://localhost:3003/registration', values);
                console.log('Registration successful:', registerResponse.data);
                setSignUpProcess('finished');
                alert("Registration successful!");

                // Redirect to the sign-in page
                history.push('/sign-in');
        
            } catch (error) {
                console.error('An error occurred:', error);
                alert("An error occurred during registration. Please try again.");
            }
        }
    });

    useEffect(() => {
        getStatus(signUpProcess);
    }, [signUpProcess]);

    const changeStatus = (status) => {
        setStatus(status);
    };


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
                {!status ? <span> <span> {selectLanguage ? 'Başlamaq üçün qeydiyyatdan keçin.' :'Sign Up to getting started.'}</span></span> : <span>{selectLanguage ?  'Özünüz haqqında bizə ətraflı məlumat verin' : 'Tell us more about yourself'}</span>
                }
                <span>{selectLanguage ? 'Davam etmək üçün məlumatlarınızı daxil edin' : 'Enter your details to proceed further'}</span>
            </div> : null}
            {signUpProcess == 'continues'  ? <form onSubmit={formik.handleSubmit}>

                <Input src={input} text={selectLanguage ? 'E-poçt' : 'Email'} uniqId={'email'} values={formik.values.email} onchange={formik.handleChange} property={'email'} placeholder={selectLanguage ? 'E-poçtunuzu daxil edin' : 'Enter your email'} />
                <SignUp changeStatus={changeStatus} formik={formik} setSignUpProcess={setSignUpProcess} selectLanguage = {selectLanguage} />
            </form> : null}

            {signUpProcess == 'finished'  ? <div className='SignUpFinish'>
                <img src={image} />
                <span>{selectLanguage ?  'Təşəkkür edirik': 'Thank you'}</span>
                <span>{selectLanguage ? `${formik.values.email} ünvanına bir e-poçt göndərdik` : `We have sent an email to ${formik.values.email}`}</span>
                <span>{selectLanguage ? 'Hesabınızı doğrulamaq üçün e-poçtdakı təsdiqləmə linkinə klikləyin' : 'Click confirmation link in the email to verify your account'}</span>
                <button style={{ cursor: 'pointer' }} className='buttonInsideFinish'>{selectLanguage ? 'E-poçtu yenidən göndərin' :'Resend Email'}</button>
            </div> : null}








        </div>
    )
}
