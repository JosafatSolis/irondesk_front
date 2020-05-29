import React from "react";
import { Formik } from "formik"; // Es una libreria de React que facilita el manejo de formularios
import * as Yup from "yup"; //libreria para validar el formulario
import ErrorDialog from "../ErrorDialog";
import AppContext from "../../AppContext";

// VALIDACIONES --> las vamos a definir usando YUP como si fuera un SCHEMA de base de datos

const validationSchema = Yup.object().shape({
  date: Yup.date()
    .required("Tiene que incluir una fecha correcta")
    .max(new Date() + 86400000),

  description: Yup.string()
    .min(50, "Por favor incluya más información...")
    .required("Cuéntanos qué problema tienes"),
});

////////////FORMULARIO

export default function FormikFormActivity() {
  const pathSplit = window.location.pathname.split("/")
  const ticketId = pathSplit[pathSplit.length - 1];
  return (
    <AppContext.Consumer>
      {(value) => {
        const { addActivity } = value;
        return (
          <div>
            <Formik
              //aqui estan los valores del formulario (Schemas)
              initialValues={{ date: new Date(), description: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                const { date, description } = values;
                setSubmitting(false);
                resetForm();
                addActivity(ticketId, {date, description});
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
                      placeholder="Describe a detalle tu problema..."
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
