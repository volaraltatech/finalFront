import React from "react";
import { Link } from "react-router-dom";
import { Formik,Form } from "formik";
import * as Yup from "yup";
const Insurance = () => (
  <Formik
    initialValues={{
      email: "",
      password: "",
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string().email().required("Required"),
      password: Yup.string()
        .required('Required')
        .min(8, "Password is too short - should be 8 character minimum.")
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Must Contain  Minimum 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
      })}
    onSubmit={(values,{resetForm}) => {
      alert(JSON.stringify(values,null ,4));
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
          <div className="container login_div">
            <div className="row">
              <div className="col-12 col-md-12 align-content-center justify-content-center ">
                <h3 className="display-6 text-center pt-3 mt-2">Login</h3>
                <hr className="w-50 mx-auto"></hr>
              </div>
              <div className="col-md-6 col-10 mx-auto col-sm-6">
                <Form onSubmit={handleSubmit}>
                  <div className="mb-3 ">
                    <label for="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control "
                      id="email"
                      placeholder="Enter email"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
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
                      id="password"
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
                  <div className="text-center">
                    <Link to="/InsuranceOp">
                      <button
                        type="submit"
                        className="btn btn-primary btn-round "
                      >
                      Sign in
                      </button>
                    </Link> 
                  </div>
                </Form>
                <div className="text-center my-2 ">
                  New User?{" "}
                  <Link
                    exact
                    className="link text-decoration-none "
                    to="/InsuranceRegister"
                  >
                    Create Account
                  </Link>
                </div>
                <div className="text-center ">
                  <Link
                    exact
                    className="link  text-decoration-none"
                    to="/forgetpassword"
                  >
                    Forget Password ?
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
export default Insurance;