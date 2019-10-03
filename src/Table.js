import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from "./shoppingList.js"
import TableRow from "./TableRow";


class Table extends React.Component {

    render() {
        const contacts=this.props.contacts;


        return <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">nome</th>
                <th scope="col">apelido</th>
                <th scope="col">telefone</th>
                <th scope="col">acões</th>
            </tr>
            </thead>
            <tbody>
            {contacts.map(


                function (contact) {
                   return   <TableRow  id={contact.id} name={contact.name} nickname={contact.nickname}
                                      phone={contact.phone}/>
                }

            )}
            </tbody>
        </table>
    }


}

export default Table;
