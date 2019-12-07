import React from "react"
import {Link} from "react-router-dom"

const NavBar = () => (
    <nav class="NavBar">
        <p class="left">Benji's animal shelter</p>
        <Link to="/about" class="mid">About</Link>
        <Link to="/" class="right">Adopt a pet</Link>
    </nav>
)

export default NavBar