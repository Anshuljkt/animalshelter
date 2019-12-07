import React from "react"
import NavBar from "./NavBar.js"
import DogsAndPuppies from "./DogsandPuppies.js"
import Cats from "./Cats.js"

const Home = () => {
    return (
        <div className="App">
            <NavBar />
            <DogsAndPuppies />
            <Cats />
        </div>
    )
}

export default Home