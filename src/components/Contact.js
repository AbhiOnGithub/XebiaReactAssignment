import React from 'react';
import Address from './Address.js';

export default class Contact extends React.Component {

    render(){
        return(
            <div>
                <Address headoffice='Xebia, Netherlands' branchoffice='Xebia IT Architects'/>
            </div>
        );
    }
}