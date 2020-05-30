import React from "react";
import { Formik } from "formik"; // Es una libreria de React que facilita el manejo de formularios
import * as Yup from "yup"; //libreria para validar el formulario
import ErrorDialog from "../ErrorDialog";
import AppContext from "../../AppContext";

// VALIDACIONES --> las vamos a definir usando YUP como si fuera un SCHEMA de base de datos

const validationSchema = Yup.object().shape({
  description: Yup.string()
    .min(50, "Please describe with more detail...")
    .required("Please enter your problem"),
});

////////////FORMULARIO

export default function FormikFormTicket(props) {
  return (
    <AppContext.Consumer>
      {(value) => {
        const { createTicket } = value;
        return (
          <div>
            <Formik
              //aqui estan los valores del formulario (Schemas)
              initialValues={{ description: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                const { description } = values;
                setSubmitting(false);
                resetForm();
                createTicket(description, props.tenantId);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="description"> Problem: </label>
                    <textarea
                      rows="6"
                      placeholder="Describe with detail the problem..."
                      type="text"
                      name="description"
                      id="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      className={
                        touched.description && errors.description
                          ? "uk-form-danger uk-text-secondary uk-text-center uk-input"
                          : " uk-form-success uk-text-secondary uk-text-center uk-input"
                      }
                    ></textarea>

                    <ErrorDialog
                      touched={touched.description}
                      message={errors.description}
                    />
                  </div>

                  <div className="uk-submit">
                    <button
                      type="submit"
                      disabled={isSubmitting} // no se pueda apretar mientras se sube}
                      className="uk-button uk-button-primary uk-align-center"
                    >
                      {" "}
                      LEVANTAR TICKET{" "}
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}
