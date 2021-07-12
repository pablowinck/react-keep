import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = { notas: [] };
    this._novasNotas = this._novasNotas.bind(this);
  }
  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas);
  }
  componentWillUnmount() {
    this.props.notas.desinscrever(this._novasNotas);
  }
  _novasNotas(notas) {
    this.setState({ ...this.state, notas });
  }
  render() {
    return (
      <>
        <div className="input-group input-group-sm mb-3 mt-2">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Pesquisar
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <ul className="lista-notas">
          {this.state.notas.map((nota, index) => {
            return (
              <li className="lista-notas_item" key={index}>
                <CardNota
                  indice={index}
                  apagarNota={this.props.apagarNota}
                  titulo={nota.titulo}
                  texto={nota.texto}
                  categoria={nota.categoria}
                />
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default ListaDeNotas;
