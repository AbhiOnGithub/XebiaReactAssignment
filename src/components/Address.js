import React from 'react';

export default class Address extends React.Component {

    render() {
        return(<div>
            <table>
            <tr>
            <td>Head Office:</td><td>{this.props.headoffice}</td>
            </tr>
            <tr>
                <td>Branch Office:</td><td>{this.props.branchoffice}</td>
            </tr>
            <tr>
            <td>Phone:</td><td>9848964305</td>
            </tr>
            <tr>
                <td>City:</td><td>Gurgaon</td>
            </tr>
            <tr>
                <td>State:</td><td>Haryana</td>
            </tr>
            <tr>
                <td>Pincode:</td><td>123456</td>
            </tr>
            </table>
        </div>);
    }

}