import React from 'react'

const AnimalCard = props => {
  return (
      <div>
      <img src="https://picsum.photos/300/250"/>
      <h1>{props.name}</h1>
      <p>{props.breed}</p>
      <p>{props.status}</p>
      <p>{props.gender}, {props.age} years old</p>
      <button>View more details</button>
      </div>
    )
}
export default AnimalCard