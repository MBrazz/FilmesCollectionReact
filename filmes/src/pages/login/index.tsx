import React from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Input from '../../components/input/index';
import './style-login.css';
import '../../assets/styles/global.css'

function Login(){
    return(
        <div className="login">
            <Header description="Faça o login e acesse a Coletânea"/>
    <main>
        <div className="container">
            <div>
                <h1>Login</h1>
            </div>
        </div>

        <div className="inputs">
        <Input type="e-mail" name="email" label="E-mail"/>
        <br/>
        <Input type="password" name="senha" label="Senha"/>
        </div>

        <button typeof="">Enviar</button>
    </main>
            
            <Footer/>
        </div>
    );
}

export default Login;