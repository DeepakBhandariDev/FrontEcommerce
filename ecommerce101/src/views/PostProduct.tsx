import React, { useContext } from "react";
import Header from "../components/Header";
import { Formik } from "formik";
import { postAProduct } from "../redux/actions/product";
import { useDispatch, useSelector } from "react-redux";
import {Product, AppState} from '../types'

import ThemeContext from "../themeContext";


export default function PostProduct() {
  const dispatch = useDispatch();
  const token = useSelector((state: AppState) => state.user.token)

const { theme, switchTheme } = useContext(ThemeContext);
const style = { backgroundColor: theme.color };


  return (
    <div className="formOut" style={style}  >
      <div className="formIn">
      <Formik
      
        initialValues={{
        _id: "",
          name: "",
          imageUrl: "",
          brand: "",
          category: "",
          description: "",
          price: 0,
          countInStock: 0,
        }}
        validate={values => {
          const errors: Record<string, string> = {};
          if (!values.name) {
            errors.name = "Required";
          } else if (values.name.length < 2) {
            errors.name = "Enter a proper name";
          }
          if (!values.imageUrl) {
            errors.imageUrl = "Required";
          }
          if (!values.brand) {
            errors.brand = "Required";
          }
          if (!values.category) {
            errors.category = "Required";
          }
          if (!values.description) {
            errors.description = "Required";
          }
          if (!values.price) {
            errors.price = "Required";
          }
          if (!values.countInStock) {
            errors.countInStock = "Required";
          }
          return errors;
        }}
        onSubmit={(data, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(true);
            dispatch(postAProduct({ ...data },token));
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
              name="name"
              placeholder="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
            <input
              type="input"
              name="imageUrl"
              placeholder="imageUrl"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.imageUrl}
            />
            {errors.imageUrl && touched.imageUrl && errors.imageUrl}
            <input
              type="input"
              name="brand"
              placeholder="brand"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.brand}
            />
            {errors.brand && touched.brand && errors.brand}
            <input
              type="input"
              name="category"
              placeholder="category"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.category}
            />
            {errors.category && touched.category && errors.category}
            <input
              type="input"
              name="description"
              placeholder="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            {errors.description && touched.description && errors.description}
            <label>Price</label>
            <input
              type="input"
              name="price"
              placeholder="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {errors.price && touched.price && errors.price}
            <label>CountInStock</label>
            <input
              type="input"
              name="countInStock"
              placeholder="countInStock"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.countInStock}
            />
            {errors.countInStock && touched.countInStock && errors.countInStock}

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik></div>
    </div>
  );
}
