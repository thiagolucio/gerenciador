import React  from 'react';
import { Link } from 'react-router-dom';
import Massage from '../assets/img/massage.gif';
import Button from '../components/Button/Button';


function Home() {
    return (
        <section className="d-flex flex_vertical centralize">
            <h1 className="font_logo font_normal">Gestão de Clientes</h1>
            <div className="d-flex flex_horizontal gap16">
                <Link to="/projetos">
                    <Button buttonClass="info" buttonText="Clientes" type="button" />
                </Link>
                <Link to="/novo-projeto">
                    <Button buttonClass="primary" buttonText="+ Cliente" type="button" />
                </Link>
            </div>
            <img src={Massage} alt="animation from Welcome Application" className="img_responsive" />
        </section>
        )
}

export default Home;