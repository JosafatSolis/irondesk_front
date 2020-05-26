import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return (
            <div style={{}}>
             
             <table class="uk-table uk-table-hover uk-table-divider"
                   style={{color: "grey",
                           border:"solid black 2px"
                }}
             >
   
             <tbody  style={{borderBottom: "solid 2px grey"}}>

                <tr  style={{borderBottom: "solid 2px grey"}}>
                        <td> 
                            <strong>HORA DE APERTURA </strong><br/>    
                            <span uk-icon="clock"></span>
                        </td>
                        <td>10:22             </td>
                </tr>

                <tr  style={{borderBottom: "solid 2px grey"}}>
                        <td> 
                            <strong>HORA DE CIERRE </strong><br/>   
                            <span uk-icon="clock"></span>
                        </td>
                        <td>    PENDIENTE       </td>
                </tr>

                <tr  style={{borderBottom: "solid 2px grey"}}>
                        <td> 
                            <strong>TENANT </strong><br/>         
                            <span uk-icon="tag"></span>
                        </td>
                        <td>    BT             </td>
                </tr >

                <tr  style={{borderBottom: "solid 2px grey"}}>
                        <td> 
                            <strong>REPORTA </strong><br/> 
                            <span uk-icon="user"></span> 
                        </td>
                        <td>Juan Perez      </td>
                </tr>
                    
                <tr  style={{borderBottom: "solid 2px grey"}}>
                        <td> 
                            <strong>ASIGNADO A</strong><br/>     
                              <span uk-icon="users"></span>
                        </td>
                        <td> El deivid     </td>
                </tr>

                <tr  style={{borderBottom: "solid 2px grey"}}>
                        <td> 
                            <strong>DESCRIPCIÓN </strong><br/>        
                            <span uk-icon="file-text"></span>
                        </td>
                        <td>
                            Dejo de funcionar el equipo
                        </td>
                </tr>


                <tr style={{borderBottom: "solid 2px grey"}}>
                        <td> 
                            <strong>ACTIVIDADES </strong><br/>       
                            <span uk-icon="info"></span>
                        </td>
                        <td className="uk-column-1-1 container-fluid">
                            <div> Checar Problema    </div>
                            <div> Ver posibles fallos</div>
                            <div> Reparar el problema</div>
                            <div> Cerrar ticket      </div>
                        </td>
                </tr>
     </tbody>
 </table>
    





              
              
             </div>


        
        )
    }
}