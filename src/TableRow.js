import React from 'react';


export default class TableRow extends React.Component {



    render() {

        return  <tr>
            <td>{this.props.id}</td>
            <td>{this.props.name}</td>
            <td>{this.props.nickname}</td>
            <td>{this.props.phone} </td>
            <td>4</td>
        </tr>

    }


}

