import React from 'react';
import {Formik} from "formik" // Es una libreria de React que facilita el manejo de formularios
import * as Yup from "yup"    //libreria para validar el formulario 
import ErrorDialog from "../ErrorDialog"



// VALIDACIONES --> las vamos a definir usando YUP como si fuera un SCHEMA de base de datos


const validationSchema = Yup.object().shape(  {
    tenant: Yup.string()
    .required("Select a tenant"),

    code: Yup.string()
    .required("You must enter a code")
    .min(2, "At least use two characters"),
})

////////////FORMULARIO

export default function FormikFormTenant (){
   
    return (
    <div>
     <Formik
        //aqui estan los valores del formulario (Schemas)
        
        initialValues= { {tenant: "", code:"" }}
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
                <label htmlFor="tenant"> Tenant:           </label>
                   {/*cambiar a radio */}
                    <select
                        name="tenant"
                        id="tenant"
                        value={values.tenant}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.tenant && errors.tenant ? "uk-select uk-form-danger uk-text-secondary uk-text-center" : "uk-select uk-form-success uk-text-secondary uk-text-center"}
                    >
                        
                    {/* {this.props.tenants.map( (tenant) => (
                        aqui deberían reproducirse las opciones de acuerdo a la cantidad de tennats que hay
                        <option>
                            value={tenant.name}` label={tenant.name}
                        </option> */}


))}         
                        
                    </select>

                    <ErrorDialog
                    touched={touched.role}
                    message={errors.role}
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
                    >      SUBMIT          </button>
                </div>


                </form>
                )}
        
    </Formik>
    </div>

    
    )}


