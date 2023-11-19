import React from 'react'
import LoginCarts from './LoginCarts';
import google from "../assets/Google.svg";
import facebook from "../assets/Facebook.svg";
import twitter from "../assets/Twitter.svg";
import RadioInput from './RadioInput';


export default function SignUpShort({ setStatus, changeStatus, formik, selectLanguage }) {
  return (
    <div className="SignUpClose">
      <RadioInput text={selectLanguage ? 'Qaydalar və şərtlərlə razıyam' : 'I agree with terms & conditions'} name={'checked'} onchange={formik.handleChange} formik={formik} values={'Agreement'} />
      <button
        className="bigPurplebutton"
        onClick={(e) => {
          e.preventDefault();
          setStatus(true);
          changeStatus(true)
        }}
        disabled={formik.values.email == '' || formik.errors.email || !formik.values.checked.includes('Agreement') ? true : false}
        style={{ backgroundColor: formik.values.email == '' || formik.errors.email || !formik.values.checked.includes('Agreement') ? '#a090fb' : null, cursor: formik.values.email == '' || formik.errors.email ? 'not-allowed' : null }}
      >
        {
          selectLanguage ? 'Qeydiyyatdan keçin' :
            'Sign Up'
        }

      </button>
      <div className="orDiv">
        <div></div>
        <span>{selectLanguage ? 'Və Ya' : 'Or'}</span>
        <div></div>
      </div>

      <div className="cartContainer">
        <LoginCarts text={selectLanguage ? 'Google ilə qeydiyyatdan keçin' : "Sign Up with Google"} src={google} />
        <LoginCarts text={selectLanguage ? 'Facebook ilə qeydiyyatdan keçin' : "Sign Up with Facebook"} src={facebook} />
        <LoginCarts text={selectLanguage ? 'Twitter ilə qeydiyyatdan keçin' : "Sign Up with Twitter"} src={twitter} />
      </div>
    </div>
  )
}
