import React from 'react';

export default class Form extends React.Component {

    state = {
        id: null,
        name: "",
        nickname: "",
        phone: "",
        ativo:true
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const contato = nextProps.currentContact;
        if (contato && contato.id !== this.state.id) {
            this.setState({
                id: contato.id,
                name: contato.name,
                nickname: contato.nickname,
                phone: contato.phone,
                ativo: contato.ativo

            })
        }

    }

    render() {

        return <div className="row" style={{marginBottom:10}}>
            <div className="col" >
                <form onSubmit={

            (e) => {
                this.props.adicionarNovo(
                    {
                        id: this.state.id || new Date().getTime(),
                        name: this.state.name,
                        nickname: this.state.nickname,
                        phone: this.state.phone,
                        ativo: this.state.ativo
                    });
                this.setState({
                    id:null,
                    name: "",
                    nickname: "",
                    phone: "",
                    ativo: true

                })


                e.preventDefault();
            }

        }>
            <fieldset>
                <div style={{textAlign:"center"}}>
                <label>Nome
                    <div className="form-group">
                    <input value={this.state.name} onChange={
                        (element) => {
                            const value = element.target.value;
                            this.setState({name: value})

                        }


                    } type="text" name="Nome"/>
                    </div>
                   </label>
                </div>
                <div style={{textAlign:"center"}}>
                <label>Apelido
                    <div className="form-group">
                    <input value={this.state.nickname} onChange={
                        (element) => {
                            const value = element.target.value;
                            this.setState({nickname: value})
                        }

                    } type="text" name="Apelido"/>
                    </div>
                    </label></div>
                <div style={{textAlign:"center"}}>
                <label>Telefone
                    <div className="form-group">
                    <input value={this.state.phone} onChange={
                        (element) => {
                            const value = element.target.value;
                            this.setState({phone: value})


                        }
                    }
                           type="text" name="Telefone"/>
                    </div>
                </label> </div>

                <div style={{textAlign:"center"}}>
                <label>Ativo
                    <div className="form-check">
                       <label>
                           <input type="checkbox"
                                  checked={this.state.ativo} onChange={
                               ()=>{

                                   let ativo = this.state.ativo;
                                   ativo=!ativo;
                                   this.setState({ativo:ativo})

                               }
                           } aria-label="Chebox para permitir input text"/></label>
                            <label className="form-check-label" htmlFor="exampleCheck1">Clique em mim</label>

                    </div>

                    </label> </div>
                <div className="row">
                    <div className="col" style={{textAlign:"center"}}>
                        <button type="submit" className="btn btn-success">Enviar</button>
                    </div>
                </div>

            </fieldset>
        </form>
            </div></div>


    }

}