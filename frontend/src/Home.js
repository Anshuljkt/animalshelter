import React from "react"
import NavBar from "./NavBar.js"
import DogsAndPuppies from "./DogsandPuppies.js"
import Cats from "./Cats.js"
import Animalcard from "./AnimalCard"
import cat1 from "./img/cat1.jpg"
import cat2 from "./img/cat2.jpg"
import cat3 from "./img/cat3.jpg"
import dog1 from "./img/dog1.jpg"
import dog2 from "./img/dog2.jpg"
import dog3 from "./img/dog3.jpg"

var animalmap = [
    {
      _id: 'dog',
      pets: [
        {
          src: dog1,
          name: 'Rocky',
          breed: 'American pit bull cross',
          status: 'Neutered and vaccinated',
          gender: 'Female',
          age: 7,
          adopted: false,
        },
        {
          src: dog2,
          name: 'Juju',
          breed: 'American staff cross',
          status: 'Neutered, not vaccinated',
          gender: 'Male',
          age: 7,
          adopted: true,
        },
        {
          src: dog3,
          name: 'Knuckles II',
          breed: 'Anatolian Shepherd',
          status: 'Neutered and vaccinated',
          gender: 'Male',
          age: 1,
          adopted: false,
        }
      ]
    },
    {
      _id: 'cat',
      pets: [
        {
          src: cat1,
          name: 'Terry',
          breed: 'Domestic medium hair cross',
          status: 'Neutered, not vaccinated',
          gender: 'Male',
          age: 2,
          adopted: false,
        },
        {
          src: cat2,
          name: 'Chonker',
          breed: 'Main coone',
          status: 'Status unknown',
          gender: 'Female',
          age: 5,
          adopted: true,
        },
        {
          src: cat3,
          name: 'Kip',
          breed: 'Domestic shorthair',
          status: 'Neutered and vaccinated',
          gender: 'Female',
          age: 2,
          adopted: false,
        }
      ]
    }
  ]

async function updateAnimalMap() {
  const url = "http://localhost:3001/groupPets";
  const options = {
    method: 'GET',
    headers: {
      "Accept": 'application/json'
    } 
  }
  fetch(url, options)
  .then(resp => {
    return resp.json();
  })
  .then(json => {
    animalmap = null;
    animalmap = json;
    return;
  })
  .catch(error => {
    console.error(error);
  })
  return;
}

const Home = () => {
    return (
      <div className="App">
        <NavBar weight={300} home={true} />

        <div class='sections' id='topSection'>
          <h1 className='header'>Dogs and puppies</h1>
          <section>
            {animalmap[0].pets.map(pet => (
              <Animalcard
              name={pet.name}
              breed={pet.breed}
              status={pet.status}
              gender={pet.gender}
              age={pet.age}
              src={pet.src}
              />
            ))}
          </section>
        </div>


        <div class='sections' id='bottomSection'>
          <h1 className='header'>Cats</h1>
          <section>
            {animalmap[1].pets.map(pet => (
              <Animalcard
              name={pet.name}
              breed={pet.breed}
              status={pet.status}
              gender={pet.gender}
              age={pet.age}
              src={pet.src}
              />
            ))}
          </section>
        </div>
    </div>
    )
}

export default Home