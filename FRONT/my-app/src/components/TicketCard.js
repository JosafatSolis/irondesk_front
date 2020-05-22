import React, { Component } from 'react';
import DeviceCard from './DeviceCard';

export default class TicketCard extends Component {
    render() {
        return (
            <div 
            className="uk-container"
            style={
                {
                 margin: "15px",
                 width: "100%"
            }
            
            }>
               
               

    <table 
    class="uk-table uk-table-hover uk-table-divider"
   
    >
   
    <tbody>

        <tr>
            <td>HORA DE APERTURA   </td>
            <td>10:22             </td>
        </tr>

        <tr>
            <td>HORA DE CIERRE   </td>
            <td>    PENDIENTE       </td>
        </tr>

        <tr>
            <td>TENANT          </td>
            <td>BT              </td>
        </tr>

        <tr>
            <td>REPORTA         </td>
            <td>Juan Perez      </td>
        </tr>
        
        <tr>
            <td>ASIGNADO A       </td>
            <td> El deivid     </td>
        </tr>

        <tr>
            <td>DESCRIPCIÓN        </td>
            <td>
                Dejo de funcionar el equipo BLABLABALABLABALABLABALBALABALAKSJDKLSAJDASHDIUFGIAUFBCAICBAIKCBAKJCBAICJBAIKCBAIBLDNCLJDCHNLJDKCHNDJLSKC     
            </td>
        </tr>


        <tr>
            <td>ACTIVIDADES        </td>
            <td 
         
            className="uk-column-1-1 container-fluid"
            >
                <div>ACTIVIDAD 1 </div>
                <div>ACTIVIDAD 2 </div>
                <div>ACTIVIDAD 3 </div>
                <div>ACTIVIDAD 4 </div>
                
                   


            </td>
        </tr>

    </tbody>
</table>
    





              
              
            </div>
        )
    }
}
