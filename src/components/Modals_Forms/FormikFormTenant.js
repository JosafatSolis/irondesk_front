import React from 'react';
import {Formik} from "formik" // Es una libreria de React que facilita el manejo de formularios
import * as Yup from "yup"    //libreria para validar el formulario 
import ErrorDialog from "../ErrorDialog"


// VALIDACIONES --> las vamos a definir usando YUP como si fuera un SCHEMA de base de datos


const validationSchema = Yup.object().shape(  {
    name: Yup.string()
                        
    .min(1, "Write your name")
    .max(15, "Your name is too long")
    .required("You must have a name"),

    code: Yup.string()
    .required("You must enter a code")
    .min(2, "At least use two characters"),
})

////////////FORMULARIO

export default function FormikFormTenant (){
   
    return (
    <div 
    className= "uk-position-center uk-vertical-align uk-text-center"
            style={  {
                width: "800px",
                border: "solid black",
                backgroundColor:  "#ADD8E6",
                    }}  

    >
    <Formik
        //aqui estan los valores del formulario (Schemas)
        initialValues= { {name: "", email: "", problem: "", code:"", phone:""  }}
        validationSchema={validationSchema}
        onSubmit= { (values, {setSubmitting, resetForm} )=>{
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
                    <label htmlFor="name">    Name:       </label>
                    <input 
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" Enter Tenants name"  
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    style= {{width:"40%"}}
                    className={touched.name && errors.name ? "uk-form-danger uk-text-secondary" : "uk-form-success uk-text-secondary"} 
                   />

                    <ErrorDialog
                    touched={touched.name}
                    message={errors.name}
                    /> 
                </div>

                <div>
                    <label htmlFor="code"> Code:           </label>
                    <input 
                    type="text"
                    name="code"
                    id="code"
                    placeholder=" Enter your code"  
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.code}
                    style= {{width:"40%"}}
                    className={touched.code && errors.code ? "uk-form-danger uk-text-secondary" : "uk-form-success uk-text-secondary"}
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
                    className="uk-button uk-button-primary"
                    >      SUBMIT          </button>
                </div>


                </form>
                )}
        
    </Formik>
    </div>

    
    )}


