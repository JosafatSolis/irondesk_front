import React, {Component} from 'react';
let logo = require ("../images/logo.png")



class Login extends Component {

  

    render () {
        return (
        <div 
            className= "uk-position-center uk-vertical-align uk-text-center"
            style={  {
                width: "500px",
                border: "solid black",
                backgroundColor:  "#ADD8E6",
                    }}   > 

            <div>
                <img width="200" 
                     src={logo}
                     alt="company"   />

            <form>
                    <div className="uk-form-row ">   

                        <input  
                            className="uk-width-1-1 uk-form-large uk-text-center"
                            type="text"
                            placeholder = "Username"        >
                        </input>

                        <input  
                            className="uk-width-1-1 uk-form-large uk-text-center"
                            type="text"
                            placeholder = "Password"        >
                        </input>

                        <div className="uk-form-row ">         
                            <button 
                            className="uk-button uk-button-large"
                            style={{ backgroundColor:  "#ADD8E6"}}>
                            Login
                            </button>
                        
                        </div>


                    
                    </div>
            </form>

        </div>
        </div>
    )}
}

export default Login