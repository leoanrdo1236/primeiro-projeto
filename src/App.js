import React from 'react';
import './App.css';
import Table from "./Table";
import Form from "./Form";


class App extends React.Component {

    state = {
        contacts: [
            {id: 1, name: "denner", nickname: "abc", phone: 83444454487, ativo: true},
            {id: 2, name: "leo", nickname: "dddd", phone: "32323233", ativo: true},
            {id: 3, nickname: "nati", phone: 484848484, name: "natalia", ativo: false},
            {id: 4, nickname: "luh", phone: 4848484, name: "lucas", aprovado: true},
            {id: 5, nickname: "h", phone: 4848484, name: "pirata", ativo: true, aprovado: true},
        ],
        currentContact: null
    };


    render() {
        return (
            <div className="container">

                <div>
                    <h2>TABELA</h2>
                </div>

                <Form currentContact={this.state.currentContact}
                      adicionarNovo={
                          (contato) => {
                              const contacts = this.state.contacts;
                              if (this.state.currentContact && contato.id === this.state.currentContact.id) {

                                  const contact = contacts.filter(
                                      (cont) => {
                                          return cont.id === contato.id
                                      }
                                  )[0];
                                  contact.name = contato.name;
                                  contact.phone = contato.phone;
                                  contact.nickname = contato.nickname;
                                  contact.ativo =contato.ativo
                              } else {
                                  contacts.push(contato)
                              }
                              this.setState({contacts: contacts,currentContact:null})
                          }


                      }/>
                <Table contacts={this.state.contacts}
                       editar={(id) => {
                           const contacts = this.state.contacts;

                           const contact = contacts.filter(
                               (contato) => {
                                   return contato.id === id
                               }
                           )[0];
                           this.setState({currentContact: contact});
                       }}

                       remove={
                           (id) => {
                               //    alert("aki "+id)

                               const contacts = this.state.contacts;

                               const contact = contacts.filter(
                                   (contato) => {
                                       return contato.id === id
                                   }
                               )[0];

                               const index = contacts.indexOf(contact)

                               contacts.splice(index, 1)

                               this.setState({contacts: contacts});

                           }

                       }
                />

            </div>


        );
    }
}

export default App;
