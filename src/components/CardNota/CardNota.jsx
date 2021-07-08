import React, { Component } from "react";
import "./estilo.css";
class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.nota.titulo}</h3>
        </header>
        <p className="card-nota_texto">{this.props.nota.texto}</p>
      </section>
    );
  }
}

export default CardNota;
