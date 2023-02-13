import React, { Component } from 'react';
import './style.css'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      frase: "",
      biscoito: require('./assets/biscoito.png')
    }

    this.abreBiscoito = this.abreBiscoito.bind(this);

    this.frases = [
      "Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.",
      "Sem o fogo do entusiasmo, não há o calor da vitória.",
      "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
      "Não importa o tamanho da montanha, ela não pode tapar o sol.",
      "Espere pelo mais sábio dos conselhos: o tempo.",
      "Se você se sente só é porque construiu muros ao invés de pontes.",
      "Você é do tamanho do seu sonho.",
      "A maior barreira para o sucesso é o medo do fracasso.",
      "O amor está sempre mais próximo do que você imagina.",
      "Uma bela flor é incompleta sem as suas folhas.",
      "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."
    ]
  }

  abreBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)

    state.biscoito = require('./assets/biscoito-aberto.png')
    state.frase = '"'  + this.frases[numeroAleatorio] + '"';
    this.setState(state);
  }

  render(){
    return(
      <div className='container'>
        <img src={this.state.biscoito} className='container__img'></img>
        <Botao nome="Abrir biscoito" acaoBtn={this.abreBiscoito}/>
        <h3 className='container__frase' >{this.state.frase}</h3>
      </div>
    )
  }

}

class Botao extends Component{
  render(){
    return(
      <div>
        <button className='botao' onClick={this.props.acaoBtn} >{this.props.nome}</button>
      </div>
    )
  }
}

export default App;
