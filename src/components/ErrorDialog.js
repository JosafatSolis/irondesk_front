import React from "react"

const ErrorDialog = ({touched, message}) =>{

    if (!touched) {return <div className="uk-form-danger"> &nbsp; </div>}
    if (message) {return <div className="uk-form-danger"> {message} </div>}

    return <div className= "uk-form-success"> <span uk-icon="icon: check"></span>

    </div>
}

export default ErrorDialog