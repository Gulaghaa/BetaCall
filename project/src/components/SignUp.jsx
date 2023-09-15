import React from "react";
import LoginCarts from "./LoginCarts";
import { useState } from "react";
import SignUpShort from '/src/components/SignUpShort.jsx'
import SignUpLong from "./SignUpLong";



export default function ({changeStatus , formik , setSignUpProcess}) {
  const [status, setStatus] = useState(false);
  return (

    <div>
          {status ? <SignUpLong setSignUpProcess={setSignUpProcess} formik={formik}  /> : <SignUpShort  formik = {formik} changeStatus={changeStatus} setStatus={setStatus} status={status}/>}

    </div>

  );
}
