import React  from 'react';
import TopMenu from "../TopMenu/TopMenu";
import "./Footer.css";

function Footer() {
    return (
        <footer>
            <div className="d-flex p-16px centralize">
                <TopMenu />
            </div>
        </footer>
    )
}

export default Footer;