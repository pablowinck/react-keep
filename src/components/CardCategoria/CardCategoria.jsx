import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";

class CardCategoria extends Component {
  render() {
    return (
      <li key={this.props.index} className="lista-categorias_item">
        {this.props.categoria}
        <DeleteSVG
          className="lista-categorias_deletesvg"
        //   onClick={this._apagarCategoria(index)}
        />
      </li>
    );
  }
}
export default CardCategoria;
