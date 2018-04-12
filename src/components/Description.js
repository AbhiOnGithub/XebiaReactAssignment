import React from 'react';

export default class Description extends React.Component {

    render(){
        const list = this.props.data.map((i,elm) => {
            return(
            <div>
                <table>
                 <tr>
                     <td>Team Member </td><td> Role</td>
                 </tr>
                <tr>
            <td>{i.name}</td>
            <td>{i.role}</td>
                </tr>
                </table>
            </div>
            );
            }
        )
        return(
            <div>
                <div>Description:</div><div>{this.props.description}</div>

                {list}
            </div>
        );
    }

}