import React from 'react';
import fetch from 'isomorphic-fetch';

export default class StateList extends React.Component {

    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        const url = 'http://localhost:7070/api/states';
        fetch(url).then((res)=>{
            return res.json();
        }).then((data)=>{
            this.setState({data: data});
        })
    }

    render(){
        return(<div>
            <table>
                <tr>
                    <td><h4>Id</h4></td> <td><h4>Code</h4></td><td><h4>Name</h4></td>
                </tr>
            {
                this.state.data.map((k,v)=>{
                    return(<tr>
                        <td>{k.id}</td> <td>{k.code}</td><td>{k.name}</td>
                    </tr>);
                })
            }
            </table>
        </div>);
    }

}