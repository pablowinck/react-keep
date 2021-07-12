import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = { notas: [], filtro: "" };
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
  _handleEventoInput(evt) {
    let valorFiltro = evt.target.value;
    this.setState({ filtro: valorFiltro });
  }
  render() {
    return (
      <>
        <div className="input-group input-group-sm mb-3 mt-2 p-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Pesquisar
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            onKeyUp={this._handleEventoInput.bind(this)}
          />
        </div>
        <ul className="lista-notas">
          
          {this.state.notas.map((nota, index) => {

            // -=- Pesquisar -=-
            let filtro = this.state.filtro;
            if (
              (nota.titulo.length >= filtro.length && // 'mania' pq em java da erro no substring quando a variável é menor que o filtro
                nota.titulo.substring(0, filtro.length).toLowerCase() ===
                  filtro.toLowerCase()) ||
              (nota.texto.length >= filtro.length &&
                nota.texto.substring(0, filtro.length).toLowerCase() ===
                  filtro.toLowerCase()) ||
              (nota.categoria.length >= filtro.length &&
                nota.categoria.substring(0, filtro.length).toLowerCase() ===
                  filtro.toLowerCase())
            ) {

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

            }

            return null;

          })}

        </ul>
      </>
    );
  }
}

export default ListaDeNotas;
