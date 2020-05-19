import React from "react"

const Error = ({touched, message}) =>{

    if (!touched) {return <div className="uk-form-danger"> &nbsp; </div>}
    if (message) {return <div className="uk-form-danger"> {message} </div>}

    return <div className= "uk-form-success"> continua...

    </div>
}

export default Error