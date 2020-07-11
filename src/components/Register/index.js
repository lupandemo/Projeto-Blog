import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../../firebase';
import './register.css';


class Register extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email: '',
            password: ''
        };

        this.cadastrar = this.cadastrar.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }

    cadastrar(e){
        e.preventDefault();

        this.onRegister();
    }

    onRegister = async () => {
        try{
            const { nome, email, password } = this.state;

            await firebase.register(nome, email, password);
            this.props.history.replace('/dashboard');

        }catch(error){
            alert(error.message);
        }
    }

 
    render(){
        return(
            <div>
                <h1 className="register-h1">Novo Usuario</h1>
                <form onSubmit={this.cadastrar} id="register">
                    <label>Nome:</label><br/>
                    <input type="text" autoComplete="off" autoFocus value={this.state.nome} placeholder='Digite seu nome:'
                        onChange={(e) => this.setState({nome: e.target.value})} /><br/>
                    <label>Email:</label><br/>
                    <input type="email" autoComplete="off" value={this.state.email} placeholder="Digite seu email: exemplo@exemplo.com"
                        onChange={(e) => this.setState({email: e.target.value})} /><br/>
                    <label>Senha:</label><br/>
                    <input type="password" autoComplete="off" value={this.state.password} placeholder="Digite sua senha:"
                        onChange={(e) => this.setState({password: e.target.value})} /><br/>

                    <button type="submit">Cadastrar</button>

                </form>
            </div>

        );
    }
}

export default withRouter(Register);