import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from "./shoppingList.js"
import Table from "./Table";
import Form from "./Form";


class App extends React.Component {

    state = {
        contacts: [
            {id: 1, name: "denner", nickname:"abc", phone: 83444454487},
            {id: 2, name: "leo", nickname: "dddd"},
            {id:3, nickname:"nati", phone:484848484, name:"natalia"},
            {id:4, nickname:"luh", phone:4848484, name:"lucas"}


        ]
    };


    render() {
        return (
            <div className="App">
                <header className="App-header">


                    <h2>TABELA</h2>
                    <Form/>
                    <Table contacts={this.state.contacts}/>
                </header>
            </div>


        );
    }
}

export default App;
