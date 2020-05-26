import React from 'react';
import {Formik} from "formik" // Es una libreria de React que facilita el manejo de formularios
import * as Yup from "yup"    //libreria para validar el formulario 
import ErrorDialog from "../ErrorDialog"


// VALIDACIONES --> las vamos a definir usando YUP como si fuera un SCHEMA de base de datos


const validationSchema = Yup.object().shape(  {
    name: Yup.string()
                        
    .min(1, "Write your name")
    .max(20, "Your name is too long")
    .required("You must have a name"),

    lastName: Yup.string()
                        
    .min(1, "Write your name")
    .max(20, "Your name is too long")
    .required("You must have a lastname"),

    email: Yup.string()
    .email("You must enter a valid email")
    .required("You must enter your email"),

    tenantCode: Yup.string()
    .min(1, "Write your code")
    .required("You must have a code"),

    phone: Yup.string()
    .required("You must enter your phone"),

    role: Yup.string()
    .required("Choose a role")

})



////////////FORMULARIO

export default function FormikFormUser (){
   
    return (
    <div 
    className= "uk-position-center uk-padding-small"
            style={  {
                width: "800px",
                border: "solid black",
                backgroundColor:  "#ADD8E6",

                    }}  

    >
    <Formik
        //aqui estan los valores del formulario (Schemas)
        initialValues= { {name: "", lastName: "", email: "", role: "", tenantCode:"", phone:"",    }}
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
                    <label htmlFor="name" style={{width: "300px", marginRight:"10px"}}>    Name:       </label>
                    <input 
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" Enter your name"  
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    style={{width: "54%"}}
                    className={touched.name && errors.name ? "uk-form-danger uk-text-secondary uk-text-center" : "uk-form-success uk-text-secondary uk-text-center"} 
                   />

                    <ErrorDialog
                    touched={touched.name}
                    message={errors.name}
                    /> 
                </div>

                <div>
                    <label htmlFor="lastname" style={{maxWidth: "300px", marginRight:"5px"}}>    Last Name:       </label>
                    <input 
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder=" Enter your lastname"  
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    style={{width: "50%"}}
                    className={touched.name && errors.name ? "uk-form-danger uk-text-secondary uk-text-center" : "uk-form-success uk-text-secondary uk-text-center"} 
                   />

                    <ErrorDialog
                    touched={touched.lastName}
                    message={errors.lastName}
                    /> 
                </div>

                <div>
                    <label 
                        htmlFor="email"
                        style={{width: "300px" , marginRight:"10px"}}
                        >
                            Email:          
                    </label>

                    <input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder=" Enter your email"  
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    style= {{width:"56%"}}
                    className={touched.email && errors.email ? "uk-form-danger uk-text-secondary uk-text-center" : "uk-text-center uk-form-success uk-text-secondary"}
                    />

                    <ErrorDialog
                    touched={touched.email}
                    message={errors.email}
                    /> 
                </div>

                <div>
                    <label htmlFor="tenantCode" style={{width: "300px", marginRight:"10px"}}> Tenant Code:           </label>
                    <input 
                    type="text"
                    name="tenantCode"
                    id="tenantCode"
                    placeholder=" Enter your designed code"  
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tenantCode}
                    style= {{width:"48%"}}
                    className={touched.tenantCode && errors.tenantCode ? "uk-text-center uk-form-danger uk-text-secondary uk-text-center" : "uk-text-center uk-form-success uk-text-secondary uk-text-center"}
                    />

                    <ErrorDialog
                    touched={touched.tenantCode}
                    message={errors.tenantCode}
                    /> 
                </div>

                <div>
                <label htmlFor="role" style={{width: "300px", marginRight:"8px"}}> Role:           </label>
                   
                    <select
                        name="role"
                        id="role"
                        value={values.role}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style= {{width:"58.5%"}}
                        className={touched.role && errors.role ? "uk-form-danger uk-text-secondary uk-text-center" : "uk-form-success uk-text-secondary uk-text-center"}
                    >
                        <option value=""            label="Select a role"  />
                        <option value="User"        label="User" />
                        <option value="Admin"       label="Admin" />
                        <option value="Technician"  label="Technician" />
                    </select>

                    <ErrorDialog
                    touched={touched.role}
                    message={errors.role}
                    /> 
                </div>



                <div>
                    <label htmlFor="phone" style={{width: "300px", marginRight:"10px"}}>Phone:          </label>
                    <input 
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder=" Enter your phone"  
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    style= {{width:"55%"}}
                    className={touched.phone && errors.phone ? "uk-form-danger uk-text-secondary uk-text-center" : "uk-form-success uk-text-secondary uk-text-center"}
                    />

                    <ErrorDialog
                    touched={touched.phone}
                    message={errors.phone}
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


