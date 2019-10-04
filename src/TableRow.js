import React from 'react';


export default class TableRow extends React.Component {


    render() {

        return <tr>
            <td>{this.props.id}</td>
            <td>{this.props.name}</td>
            <td>{this.props.nickname}</td>
            <td>{this.props.phone} </td>
            <td>{this.props.ativo === true ? "Ativo" : "Inativo"}</td>

            <td>
                <button type="button" className="btn btn-dark" onClick={() => {
                    this.props.editar(this.props.id);
                }}>Editar
                </button>
                <button type="button" className="btn btn-dark" onClick={
                    () => {
                        this.props.remove(this.props.id)

                    }

                }>Excluir
                </button>
            </td>
        </tr>

    }


}

