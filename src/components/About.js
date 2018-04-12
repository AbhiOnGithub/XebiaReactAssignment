import React from 'react';
import Description from './Description.js';

export default class About extends React.Component {

    constructor(){
        super();
        this.state = {
            description: 'This is xebia IT architects Description',
            data: [
                {
                 "name": 'Rajat Nigam',
                 "role": 'Application Developer'
                }
            ]
        }
    }

    render(){
        return(
            <div>
                <Description description={this.state.description} data={this.state.data}/>
            </div>
        );
    }
}