import React, { Component } from "react";
import "./estilo.css";
import CardCategoria from "../CardCategoria";
class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = { categorias: [], inCategoria: "" };
    this._novasCategorias = this._novasCategorias.bind(this);
  }
  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);
  }
  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }
  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  _handleEventoInput(e) {
    if (e.key === "Enter") {
      let valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria);
      this.setState({ inCategoria: "" });
    }
  }
  _handleMudancaCategoria(e) {
    e.stopPropagation();
    this.setState({ inCategoria: e.target.value });
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            let filtro = this.state.inCategoria;
            if (
              categoria.length >= filtro.length &&
              categoria.substring(0, filtro.length).toLowerCase() ===
                filtro.toLowerCase() &&
              index < 6 // só mostra 6 categorias
            ) {
              return (
                <CardCategoria 
                index={index}
                categoria={categoria}
                apagarCategoria={this.props.apagarCategoria}
                />
              );
            }
            return null;
          })}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar Categoria"
          value={this.state.inCategoria}
          onChange={this._handleMudancaCategoria.bind(this)}
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
