import React from "react";
import LoginCarts from "./LoginCarts";
import { useState } from "react";
import SignUpShort from "/src/components/SignUpShort.jsx";
import SignUpLong from "./SignUpLong";

export default function ({
  changeStatus,
  formik,
  setSignUpProcess,
  selectLanguage,
}) {
  const [status, setStatus] = useState(false);
  return (
    <div>
      {status ? (
        <SignUpLong
          setSignUpProcess={setSignUpProcess}
          formik={formik}
          selectLanguage={selectLanguage}
        />
      ) : (
        <SignUpShort
          formik={formik}
          changeStatus={changeStatus}
          selectLanguage={selectLanguage}
          setStatus={setStatus}
          status={status}
        />
      )}
    </div>
  );
}
