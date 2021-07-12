import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.categoria = "Sem Categoria";
    this.state = { categorias: [], inTitulo:'', inTexto:''};

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

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.setState({inTitulo: evento.target.value});
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.setState({inTexto: evento.target.value});
  }

  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.state.inTitulo, this.state.inTexto, this.categoria);
    this.setState({inTexto:'',inTitulo:''}); // zera os campos
    this.tituloInput.focus(); // requere o focus para ele
  }

  render() {
    return (
      
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>        
        <select
          className="form-cadastro_input"
          onChange={this._handleMudancaCategoria.bind(this)}
        >
          <option>Sem Categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>;
          })}
        </select>

        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
          value={this.state.inTitulo}
          ref={(input) => { this.tituloInput = input; }} // denomina que a variavel tituloInput é referente ao input
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
          value={this.state.inTexto}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
