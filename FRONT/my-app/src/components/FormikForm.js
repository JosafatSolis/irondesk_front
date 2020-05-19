import React from 'react';
import {Formik} from "formik" // Es una libreria de React que facilita el manejo de formularios
import * as Yup from "yup"    //libreria para validar el formulario 
import Error from "./Error"


// VALIDACIONES --> las vamos a definir usando YUP como si fuera un SCHEMA de base de datos


const validationSchema = Yup.object().shape(  {
    name: Yup.string()
    .min(1, "Write your name")
    .max(30, "Your name is too long")
    .required("You must have a name"),

    email: Yup.string()
    .email("You must enter a valid email")
    .required("You must enter your email"),

    textArea: Yup.string()
    .min(70, "Please describe with more detail...")
    .max(1000, "Please use less than 1,000 characters")
    .required("Please enter your problem"),

    code: Yup.string()
    .required("You must enter a code"),

     phone: Yup.string()
    .required("You must enter your phone")

})

////////////FORMULARIO

export default function FormikForm (){
   
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
        initialValues= { {name: "", email: "", textArea: "", code:"", phone:""  }}
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
                    placeholder=" Enter your name"  
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    style= {{width:"40%"}}
                    className={touched.name && errors.name ? "uk-form-danger uk-text-secondary" : "uk-form-success uk-text-secondary"} 
                   />

                    <Error
                    touched={touched.name}
                    message={errors.name}
                    /> 
                </div>

                <div>
                    <label htmlFor="email">Email:          </label>
                    <input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder=" Enter your email"  
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    style= {{width:"40%"}}
                    className={touched.email && errors.email ? "uk-form-danger uk-text-secondary" : "uk-form-success uk-text-secondary"}
                    />

                    <Error
                    touched={touched.email}
                    message={errors.email}
                    /> 
                </div>

                <div>
                    <label htmlFor="code">Code:          </label>
                    <input 
                    type="text"
                    name="code"
                    id="code"
                    placeholder=" Enter your designed code"  
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.code}
                    style= {{width:"40%"}}
                    className={touched.code && errors.code ? "uk-form-danger uk-text-secondary" : "uk-form-success uk-text-secondary"}
                    />

                    <Error
                    touched={touched.code}
                    message={errors.code}
                    /> 
                </div>

                <div>
                    <label htmlFor="phone">Phone:          </label>
                    <input 
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder=" Enter your phone"  
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    style= {{width:"40%"}}
                    className={touched.phone && errors.phone ? "uk-form-danger uk-text-secondary" : "uk-form-success uk-text-secondary"}
                    />

                    <Error
                    touched={touched.phone}
                    message={errors.phone}
                    /> 
                </div>


                <div>
                <textarea 
                    rows="6" 
                    placeholder="Describa con el mayor detalle posible su problema..."
                    className={touched.textArea && errors.textArea ? "uk-form-danger uk-input uk-text-secondary" : "uk-form-success uk-input uk-text-secondary"}
                    type="text"
                    name="textArea"
                    id="textArea"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.textArea}
                    style= {{width:"70%"}}
                    >
                </textarea>

                    <Error
                    touched={touched.textArea}
                    message={errors.textArea}
                    /> 
                </div>

                <div className="uk-submit">
                    <button 
                    type="submit"
                    disabled={isSubmitting} // no se pueda apretar mientras se sube
                    >      SUBMIT          </button>
                </div>


                </form>
                )}
        
    </Formik>
    </div>

    
    )}


