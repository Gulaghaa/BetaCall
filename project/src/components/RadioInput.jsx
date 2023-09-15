import React from 'react'
import {Formik , useFormik} from 'formik'

export default function RadioInput({text , formik , values , name , onchange}) {
  return (
    <div className="checkboxInput">
        <input type="checkbox" id="checkbox" value={values} name={name} onChange={onchange} checked={formik.values.checked.includes(values) ? true : false}/>
        <label htmlFor="checkbox" className="firstLabel">
          <div className="CircleInsideCheckbox"></div>
        </label>
        <label htmlFor="checkbox">{text}</label>
      </div>
  )
}
