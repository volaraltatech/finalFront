import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
const GovernmentRegister = () => (
  <Formik
    initialValues={{
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    }}
    validationSchema={Yup.object().shape({
      fullname: Yup.string().required("Required"),
      email: Yup.string().email().required("Required"),
      password: Yup.string()
        .required("Required")
        .min(8, "Password is too short - should be 8 character minimum.")
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Must Contain  Minimum 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required")
        .min(8, "Password is too short - should be 8 character minimum.")
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/)
    })}
    onSubmit={(values,{resetForm}) => {
      alert(JSON.stringify(values,null,4));
      resetForm({values:''});
    }}
    
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
      return (
        <>
          <div className="container-fluid login_div">
            <div className="row">
              <div className="col-12 col-md-12 align-content-center justify-content-center ">
                <h3 className="display-6 text-center pt-3 mt-2">SignUp</h3>
                <hr className="w-50 mx-auto"></hr>
              </div>
              <div className="col-md-6 col-10 mx-auto col-sm-6">
                <Form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="text" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Full Name"
                      value={values.fullname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="fullname"
                    />
                    {touched.fullname && errors.fullname && (
                      <span className="help-block text-danger">
                        {errors.fullname}
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="email"
                    />
                    {touched.email && errors.email && (
                      <span className="help-block text-danger">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="password"
                    />
                    {touched.password && errors.password && (
                      <span className="help-block text-danger">
                        {errors.password}
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="confirmPassword"
                    />
                    {touched.confirmPassword && errors.confirmPassword && (
                      <span className="help-block text-danger">
                        {errors.confirmPassword}
                      </span>
                    )}
                  </div>
                  <div class="mb-3 text-center">
                    <button type="submit" className="btn btn-primary ">Create a Account</button>
                  </div>
                </Form>
                <div className="text-center ">
                  Already have an Account?{" "}
                  <Link
                    exact
                    className="link  text-decoration-none"
                    to="/Government"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }}
  </Formik>
);
export default GovernmentRegister;
