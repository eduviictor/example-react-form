import React, { Component } from 'react';

import Form from './Form';

class App extends Component {

  state = {
    nome: '',
    email: '',
    idade: ''
  }

  handleChange = (input, esc) => {
    switch(esc){
      case 'nome':
        this.setState({ nome: input });
        break;
      case 'email':
        this.setState({ email: input });
        break;
      case 'idade':
        this.setState({ idade: input });
        break;
      default:
        break;
    }
  }

  render() {
    console.log(this.state);
    return (
      <Form state={this.state} handleChange={this.handleChange} />
    );
  }
}

export default App;