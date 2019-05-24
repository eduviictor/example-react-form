import React, { Component } from 'react'

export default class Form extends Component {

    state = {
        modulo: 1,
    }

    proxModule = (e) => {
        e.preventDefault();
        if(this.state.modulo !== 3){
            this.setState({
                modulo: this.state.modulo + 1
            })
        }
    }

    render() {
        return (
            <form>
                {this.state.modulo === 1 ? 
                <input type="text" value={this.props.state.nome} onChange={(e) => this.props.handleChange(e.target.value, 'nome')} placeholder="Nome" />
                : (this.state.modulo === 2 ? 
                <input type="text" value={this.props.state.email} onChange={(e) => this.props.handleChange(e.target.value, 'email')}placeholder="Email" />
                : (this.state.modulo === 3 ? 
                <input type="text" value={this.props.state.idade} onChange={(e) => this.props.handleChange(e.target.value, 'idade')} placeholder="Idade" />
                : null))}
                <button onClick={(e) => this.proxModule(e)}>Próximo</button>
            </form>
        )
    }
}
