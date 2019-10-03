import React from 'react';

export default class Form extends React.Component {


    render() {

        return <form action="" method="psot" id="form_prepare">
            <fieldset>
                <label>Nome <input type="text" name="Nome"/></label>
                <label>Apelido <input type="text" name="Apelido"/></label>
                <label>Telefone <input type="text" name="Telefone"/></label>
                <label>ações<input type="text" name="Nome"/></label>
                <p>
                    <button type="button" className="btn btn-success">Enviar</button>
                </p>
            </fieldset>
        </form>


    }

}