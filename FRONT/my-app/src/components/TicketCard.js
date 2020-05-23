import React, { Component } from 'react';
import DeviceCard from './DeviceCard';

export default class TicketCard extends Component {
    render() {
        return (
            <div className="uk-card uk-card-default">
                <div class="uk-card-badge uk-label">Abierto</div>
                <div className="uk-card-title">
                    10:32:05
                </div>
                <div className="uk-card-body">
                    <div>
                        Tenant: BT - Bimbo Tolucas
                    </div>
                    <div>
                        Reporta:
                        Juan Perez
                    </div>
                    <div>
                        Descripción:
                    </div>
                    <div>
                        Dejó de Funcionar el Equipo después de haber reiniciado por falla en el suministro eléctrico.
                    </div>
                    <div>
                        Asignado a:
                        David
                    </div>
                </div>
            </div>
        )   
               

//     <table 
//     class="uk-table uk-table-hover uk-table-divider"
   
//     >
   
//     <tbody>

//         <tr>
//             <td>HORA DE APERTURA   </td>
//             <td>10:22             </td>
//         </tr>

//         <tr>
//             <td>HORA DE CIERRE   </td>
//             <td>    PENDIENTE       </td>
//         </tr>

//         <tr>
//             <td>TENANT          </td>
//             <td>BT              </td>
//         </tr>

//         <tr>
//             <td>REPORTA         </td>
//             <td>Juan Perez      </td>
//         </tr>
        
//         <tr>
//             <td>ASIGNADO A       </td>
//             <td> El deivid     </td>
//         </tr>

//         <tr>
//             <td>DESCRIPCIÓN        </td>
//             <td>
//                 Dejo de funcionar el equipo BLABLABALABLABALABLABALBALABALAKSJDKLSAJDASHDIUFGIAUFBCAICBAIKCBAKJCBAICJBAIKCBAIBLDNCLJDCHNLJDKCHNDJLSKC     
//             </td>
//         </tr>


//         <tr>
//             <td>ACTIVIDADES        </td>
//             <td 
         
//             className="uk-column-1-1 container-fluid"
//             >
//                 <div>ACTIVIDAD 1 </div>
//                 <div>ACTIVIDAD 2 </div>
//                 <div>ACTIVIDAD 3 </div>
//                 <div>ACTIVIDAD 4 </div>
                
                   


//             </td>
//         </tr>

//     </tbody>
// </table>
    





              
              
//             </div>
//         )
    }
}
