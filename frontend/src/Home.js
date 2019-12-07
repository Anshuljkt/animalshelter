import React from "react"
import NavBar from "./NavBar.js"
import DogsAndPuppies from "./DogsandPuppies.js"
import Cats from "./Cats.js"
import AnimalCard from "./AnimalCard.js"

const animalmap = [
    {
      _id: 'dog',
      pets: [
        {
          name: 'Rocky',
          breed: 'American pit bull cross',
          status: 'Neutered and vaccinated',
          gender: 'Female',
          yearsOld: 7,
          adopted: false,
        },
        {
          name: 'Juju',
          breed: 'American staff cross',
          status: 'Vaccindated, not neutered',
          gender: 'Male',
          yearsOld: 7,
          adopted: true,
        }
      ]
    },
    {
      _id: 'cat',
      pets: [
        {
          name: 'Terry',
          breed: 'Domestic medium hair cross',
          status: 'Neutered, not vaccinated',
          gender: 'Male',
          yearsOld: 2,
          adopted: false,
        },
        {
          name: 'Chonker',
          breed: 'Main coone',
          status: 'Status unknown',
          gender: 'Female',
          yearsOld: 5,
          adopted: true,
        }
      ]
    }
  ]

const Home = () => {
    return (
        <div className="App">
      <NavBar />
      {animalmap.map(section => {
        return (
          <section>
            <DogsAndPuppies
            name={props._id}
            />
            {section.pets.map(pet => (
              <AnimalCard
              name={pet.name}
              breed={pet.breed}
              status={pet.status}
              gender={pet.gender}
              age={pet.age}
            />
            ))}
          </section>
        )
        })}
      <Cats />
    </div>
    )
}

export default Home