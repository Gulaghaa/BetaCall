import React from 'react'
import Input from '../components/Input.jsx'
import pass from '../assets/Pass.svg'
import done from '../assets/Done.svg'
import man from '../assets/man.svg'
import RadioInput from './RadioInput.jsx'



export default function SignUpLong({formik , setSignUpProcess , selectLanguage }) {
  return (
    <div className='SignUpLongMainDiv'>

      <div className='SignUpLong'>
        <div className='TwoInputTogether'>
          <Input text={selectLanguage ? 'Ad' : 'First name'}  src={man} uniqId={'name'} onchange={formik.handleChange} values={formik.values.name} property={'text'} placeholder={selectLanguage ? 'Adınızı daxil edin' : 'Enter your name'} />
          <Input text={selectLanguage ? 'Soyad' : 'Last name'} src={man} uniqId={'surname'} property={'text'} onchange={formik.handleChange} values={formik.values.surname} placeholder={selectLanguage ? 'Soyadınızı daxil edin' : 'Enter your last name'} />
        </div>
        <Input text={selectLanguage ? 'Şifrə' :  'Password'} src={pass} property={'password'} uniqId = {'password'}  values={formik.values.password} onchange={formik.handleChange} placeholder={selectLanguage ? 'Şifrənizi daxil edin' : 'Enter your password'} />
        <Input text={selectLanguage ? 'Şifrəni təsdiqləyin' : 'Confirm password'} src={done} property={'password' } uniqId={'confirmation'} values={formik.values.confirmation} onchange={formik.handleChange} placeholder={selectLanguage ? 'Şifrənizi təsdiqləyin' : 'Confirm your password'} />
      </div>
      <RadioInput text={selectLanguage ? 'Qaydalar və şərtlərlə razıyam' : 'I agree with terms & conditions'} name={'checked'} onchange={formik.handleChange} formik = {formik} values = {'Agreement'} />
      <button type='submit'  className="bigPurplebutton" onClick={()=>setSignUpProcess('finished')} disabled={Object.keys(formik.errors).length!==0 ? true : false}  style={{backgroundColor: Object.keys(formik.errors).length!==0 ?'#a090fb' : null, cursor: Object.keys(formik.errors).length!==0 ? 'not-allowed' : null}}>{selectLanguage ? 'Davam edin' : 'Continue'}</button>
      


    </div>
  )
}
