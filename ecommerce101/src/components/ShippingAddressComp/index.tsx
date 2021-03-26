import React, { useContext } from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {ShippingAddress, AppState, POST_ORDER} from '../../types'

import ThemeContext from "../../themeContext";


export default function ShippingAddressComp() {
  const dispatch = useDispatch();
  const token = useSelector((state: AppState) => state.user.token)

const { theme, switchTheme } = useContext(ThemeContext);
const style = { backgroundColor: theme.color };


  return (
    <div className="formOut" style={style}  >
      <div className="formIn">
      <Formik
      
        initialValues={{
          fullName: "",
          address: "",
          postalCode: "",
          city: "",
          country: "",
        }}
        validate={values => {
          const errors: Record<string, string> = {};
          if (!values.fullName) {
            errors.fullName = "Required";
          } else if (values.fullName.length < 2) {
            errors.fullName = "Enter a proper name";
          }
          if (!values.address) {
            errors.address = "Required";
          }
          if (!values.city) {
            errors.city = "Required";
          }
          if (!values.postalCode) {
            errors.postalCode = "Required";
          }
          if (!values.country) {
            errors.country = "Required";
          }
          return errors;
        }}
        onSubmit={(data, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(true);
            dispatch({type:POST_ORDER,payload:{shippingAddress:data}});
            console.log(data)

            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} >
            <input
              type="input"
              name="fullName"
              placeholder="fullName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.fullName}
            />
            {errors.fullName && touched.fullName && errors.fullName}
            <input
              type="input"
              name="address"
              placeholder="address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
            />
            {errors.address && touched.address && errors.address}
            <input
              type="input"
              name="city"
              placeholder="city"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
            />
            {errors.city && touched.city && errors.city}
            <input
              type="input"
              name="postalCode"
              placeholder="postalCode"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.postalCode}
            />
            {errors.postalCode && touched.postalCode && errors.postalCode}
            <input
              type="input"
              name="country"
              placeholder="country"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.country}
            />
            {errors.country && touched.country && errors.country}
            
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik></div>
    </div>
  );
}
