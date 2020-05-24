import React, { Component } from 'react';

export default class TenantCard extends Component {
    render() {
        return (
            <div className="uk-card uk-card-default">
                <div className="uk-card-title">
                    {this.props.code} - {this.props.name}
                </div>
                <div className="uk-card-body">
                    <div>
                        Tickets Abiertos:
                    </div>
                    <div>
                        10
                    </div>
                </div>
            </div>
        )
    }
}
