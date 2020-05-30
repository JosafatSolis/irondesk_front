import React from 'react';
import {Formik} from "formik" // Es una libreria de React que facilita el manejo de formularios
import * as Yup from "yup"    //libreria para validar el formulario 
import ErrorDialog from "../ErrorDialog"



// VALIDACIONES --> las vamos a definir usando YUP como si fuera un SCHEMA de base de datos


const validationSchema = Yup.object().shape(  {
    name: Yup.string()
    .required("¿Qué cliente eres?"),

    code: Yup.string()
    .required("Debes incluir un código")
    .min(2, "Por lo menos dos caracteres"),
})

////////////FORMULARIO

export default function FormikFormTenant (){
   
    return (
    <div>
     <Formik
        //aqui estan los valores del formulario (Schemas)
        
        initialValues= { {name: "", code:"" }}
        validationSchema={validationSchema}
        onSubmit= { 
        (values, {setSubmitting, resetForm} )=>{
           setSubmitting(true)
           // usamos setTime out como si fuera un post a servidor para corroborar que se envía
           setTimeout(  ()=>{
               alert(JSON.stringify(values, null, 2));
               resetForm();
               setSubmitting(false)
           }, 500)
        }}
        >
            {
             ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}  )=>(
                <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name"> Nombre:           </label>
                    <input 
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Escribe tu nombre"  
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className={touched.name && errors.name ? "uk-form-danger uk-text-secondary uk-text-center uk-input" : "uk-form-success uk-text-secondary uk-text-center uk-input"}
                    />

                    <ErrorDialog
                    touched={touched.name}
                    message={errors.name}
                    /> 
                </div>
                <div>
                    <label htmlFor="code"> Código:           </label>
                    <input 
                    type="text"
                    name="code"
                    id="code"
                    placeholder="Introduce tu código"  
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.code}
                    className={touched.code && errors.code ? "uk-form-danger uk-text-secondary uk-text-center uk-input" : "uk-form-success uk-text-secondary uk-text-center uk-input"}
                    />

                    <ErrorDialog
                    touched={touched.code}
                    message={errors.code}
                    /> 
                </div>

                <div className="uk-submit">
                    <button 
                    
                    type="submit"
                    disabled={isSubmitting} // no se pueda apretar mientras se sube}
                    className="uk-button uk-button-primary uk-align-center"
                    >      AGREGAR CLIENTE          </button>
                </div>


                </form>
                )}
        
    </Formik>
    </div>

    
    )}


