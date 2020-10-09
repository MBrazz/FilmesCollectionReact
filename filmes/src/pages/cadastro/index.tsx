import React from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import Input from '../../components/input/index';
import './style-cadastro.css';
import '../../assets/styles/global.css'


function Cadastro() {
    return(
        <div className="cadastro">
           <Header description="Faça o cadastro para o acesso"/>
           <main>
        <div className="container">
            <div>
                <h1>Cadastro</h1>
            </div>
        </div>

        <div className="inputs">
        <Input type="name" name="nome" label="Nome"/>
        <br/>
        <Input type="email" name="email" label="E-mail"/>
        <br/>
        <Input list="Acesso" name="permissao" label="Permissão"/>
        <datalist id="Acesso">
        <option value="Administrador"/>
        <option value="Comum"/>
        <option value="Locador"/>
        <option value="N.D.O.O."/>
</datalist>
        <br/>
        <Input type="password" name="senha" label="Senha"/>
        </div>

        <button typeof="">Cadastrar</button>
    </main>
            <Footer/>
           
        </div>
    )
}

export default Cadastro;