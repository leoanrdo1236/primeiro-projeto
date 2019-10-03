import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from "./shoppingList.js"
import Table from "./Table";
import Form from "./Form";


class App extends React.Component {

    state = {
        names: ["denner", "leo"],
        name: "85852"
    };


    handleChange = (value) => {
        this.setState({name: value.target.value})
    };

    addNew = (e) => {
        const {names, name} = this.state;
//console.log(name);
        names.push(name);

        this.setState({names: names, name: ""})
        e.preventDefault();
        return false;

    }

    randlerRemoveFirst = () => {
        const {names} = this.state;
        names.splice(0, 1);

        this.setState({names: names})

    }

    removeItem = (name) => {

        const {names} = this.state;
        const index = names.indexOf(name)
        names.splice(index, 1)
        this.setState({names: names})


    }

    render() {
        return (
            <div className="App">
                <header className="App-header">


                    {/*<ShoppingList items={this.state.names} onRemove={this.removeItem}/>*/}

                    {/*<form onSubmit={this.addNew}>*/}
                    {/*    <input type="text" name="firstname" value={this.state.name} onChange={this.handleChange}/>*/}
                    {/*    <button tye="button" class="btn btn-danger">Adiciona</button>*/}
                    {/*    total:{this.state.names.length}*/}
                    {/*    <button type="button" class="btn btn-dark" onClick={this.randlerRemoveFirst}>Remove</button>*/}
                    {/*</form>*/}

                <h2>TABELA</h2>
                    <Form/>
                    <Table/>
                </header>
            </div>


    );
    }
    }

    export default App;
