import React from 'react';
import './style.css';
import '../../assets/styles/global.css';
import logo from '../../assets/images/logo.png';
import  {Link} from 'react-router-dom'; 

interface HeaderProps{
    description:string;
}

const Header:React.FC<HeaderProps> = (props) => {
  return (
    <header> 
        <nav className="nav-container">
            
            <ul>
                <div id="area-logo">
                    <Link to="/"><img className="area" src={logo} title="Logo" alt="Logo maneiro"/></Link>
                    <h3>{props.description}</h3>
                </div>
                
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/login">Login</Link></li>
                <li> <Link to="/cadastro">Cadastro</Link></li>
            </ul>
            
        </nav>
    </header>
  );
}

export default Header;
