import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";

class CardCategoria extends Component {
  apagar() {
    this.props.apagarCategoria(this.props.index);
  }
  render() {
    return (
      <li key={this.props.index} className="lista-categorias_item">
        {this.props.categoria}
        <DeleteSVG
          className="lista-categorias_deletesvg"
          onClick={this.apagar.bind(this)}
        />
      </li>
    );
  }
}
export default CardCategoria;
