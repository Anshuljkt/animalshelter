import React from "react"
import {Link} from "react-router-dom"
import logo from "./img/logo.jpg"

const NavBar = props => {
    const styling = {
        fontWeight: props.weight,
    };

    return (
    <nav class="NavBar">
        <div class='left'>
            <img src={logo}/>
            <p>Benji's animal shelter</p>
        </div>

        <div class='right'>
            <Link to="/about" class="link" style={ (props.home) ? styling : null} > About </Link>
            <Link to="/" class="link" id='rightText' style={ (!props.home) ? styling : null} > Adopt a pet </Link>
        </div>
    </nav>
    )
}

export default NavBar