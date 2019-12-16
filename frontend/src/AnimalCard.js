import React from 'react'

const Animalcard = props => {
  return (
      <div class='animalCard'>
        <img src={props.src}/>
        <h1>{props.name}</h1>
        <p>• {props.breed}</p>
        <p>• {props.status}</p>
        <p>• {props.gender}, {props.age} {(props.age == 1) ? "year" : "years"} old</p>
        <button>View more details</button>
      </div>
    )
}
export default Animalcard