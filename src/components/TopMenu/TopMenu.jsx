import React  from 'react';
import logo from "../../assets/img/logo.png";
import { Link } from 'react-router-dom';
import { MdAddReaction } from 'react-icons/md';

import "./TopMenu.css";

function TopMenu() {
    return (
        <nav className='navbar'>
            <div className="start_menu_area">
                <Link to="/">
                    <img src={logo} className="App-logo" alt="logo" />
                    <span>Gestão de Clientes </span>
                </Link>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projetos">Clientes</Link>
                </li>
                <li>
                    <Link to="/novo-projeto">
                        <MdAddReaction size="1.8em" />
                    </Link>
                </li>     
            </ul>
        </nav>
    )
}

export default TopMenu;