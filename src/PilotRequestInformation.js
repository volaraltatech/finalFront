import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
const PilotRequestInformation = () => (
  <Formik
    initialValues={{
      PAN: "",
      UAOP: ""
    }}
    validationSchema={Yup.object().shape({
      PAN: Yup.string().required("Required"),
      UAOP: Yup.string().required("Required"),
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
                <h3 className="display-6 text-center pt-3 mt-2">Request Permission</h3>
                <hr className="w-50 mx-auto"></hr>
              </div>
              <div className="col-md-6 col-10 mx-auto col-sm-6">
                <Form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="text" className="form-label">
                      PAN
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter PAN"
                      value={values.PAN}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="PAN"
                    />
                    {touched.PAN && errors.PAN && (
                      <span className="help-block text-danger">
                        {errors.PAN}
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="text" className="form-label">
                      UAOP
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter UAOP"
                      value={values.UAOP}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="UAOP"
                    />
                    {touched.UAOP && errors.UAOP && (
                      <span className="help-block text-danger">
                        {errors.UAOP}
                      </span>
                    )}
                  </div>
                  <div class="mb-3 text-center">
                    <Link to="/">
                        <button type="submit" className="btn btn-primary ">Request Information</button>
                    </Link>  
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </>
      );
    }}
  </Formik>
);
export default PilotRequestInformation;
