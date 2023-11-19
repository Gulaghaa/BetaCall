import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import logo from '../assets/Dark.svg'
import strange from '../assets/strange.svg'
import Input from './Input'
import input from '../assets/Icon.svg'
import { Formik, useFormik } from "formik";
import LanguageDropdown from './LanguageDropDown'
import * as Yup from 'yup';



export default function Recover({ selectLanguage ,changeLanguagetoAz , changeLanguagetoEng }) {
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
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                    <LanguageDropdown changeLanguagetoAz={changeLanguagetoAz} changeLanguagetoEng={changeLanguagetoEng} />
                    <NavLink to='/'><button className='SignInButton'>{selectLanguage ? 'Qeydiyyatdan keçin' : 'Sign Up'  }</button></NavLink>
                </div>
            </div>
            <div className='strangeImage'>
                <img src={strange} />
            </div>
            <div className='signInfo' style={{ marginTop: '35px' }}>
                <span>{selectLanguage ? 'Şifrənizi itirdiniz?':'Lost your password?'}<span>{selectLanguage ? 'Bərpa etmək üçün məlumatlarınızı daxil edin.' :'Enter your details to recover.'}</span></span>
                <span>{selectLanguage ? 'Davam etmək üçün məlumatlarınızı daxil edin' : 'Enter your details to proceed further'}</span>
            </div>
            <form onSubmit={getFormik.handleSubmit}>
                <Input src={input} text={selectLanguage ? 'E-poçt' : 'Email'} uniqId={'getemail'} values={getFormik.values.getemail} onchange={getFormik.handleChange} property={'email'} placeholder={selectLanguage ? 'E-poçtunuzu daxil edin' : 'Enter your email'} />
                <button
                    type="submit"
                    className="bigPurplebutton"
                    disabled={getFormik.values.getemail == '' || getFormik.errors.getemail ? true : false}
                    style={{ backgroundColor: getFormik.values.getemail == '' || getFormik.errors.getemail ? '#a090fb' : null, cursor: getFormik.values.getemail == '' || getFormik.errors.getemail ? 'not-allowed' : null, marginTop: '35px', marginBottom: '187px' }}
                >{selectLanguage ? 'Bərpa et' : 'Recover'}</button>
            </form>
        </div>
    )
}
