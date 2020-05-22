import React, { Component } from 'react';
import DeviceCard from './DeviceCard';

export default class TicketCard extends Component {
    render() {
        return (
            <div className="uk-card uk-card-default">
                <div className="uk-card-title">
                    10:32:05
                </div>
                <div className="uk-card-body">
                    <div>
                        Tenant: BT - Bimbo Toluca
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
    }
}
