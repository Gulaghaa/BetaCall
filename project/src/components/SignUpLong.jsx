import React from 'react'
import Input from '../components/Input.jsx'
import pass from '../assets/Pass.svg'
import done from '../assets/Done.svg'
import man from '../assets/man.svg'
import RadioInput from './RadioInput.jsx'



export default function SignUpLong({formik , setSignUpProcess }) {
  return (
    <div className='SignUpLongMainDiv'>

      <div className='SignUpLong'>
        <div className='TwoInputTogether'>
          <Input text={'First name'}  src={man} uniqId={'name'} onchange={formik.handleChange} values={formik.values.name} property={'text'} placeholder={'Enter your name'} />
          <Input text={'Last name'} src={man} uniqId={'surname'} property={'text'} onchange={formik.handleChange} values={formik.values.surname} placeholder={'Enter your last name'} />
        </div>
        <Input text={'Password'} src={pass} property={'password'} uniqId = {'password'}  values={formik.values.password} onchange={formik.handleChange} placeholder={'Enter your password'} />
        <Input text={'Confirm password'} src={done} property={'password' } uniqId={'confirmation'} values={formik.values.confirmation} onchange={formik.handleChange} placeholder={'Confirm your password'} />
      </div>
      <RadioInput text={'I agree with terms & conditions'} name={'checked'} onchange={formik.handleChange} formik = {formik} values = {'Agreement'} />
      <button type='submit'  className="bigPurplebutton" onClick={()=>setSignUpProcess('finished')} disabled={Object.keys(formik.errors).length!==0 ? true : false}  style={{backgroundColor: Object.keys(formik.errors).length!==0 ?'#a090fb' : null, cursor: Object.keys(formik.errors).length!==0 ? 'not-allowed' : null}}>Continue</button>
      


    </div>
  )
}
