
import React from 'react'

export default function Components(props) {

  
  return (
    <div className="monkey">
      <div>
        <img src={props.img} />
        <h1>{props.name}</h1>
        <p className="p1">{props.price}$ <span>{props.maxprise}</span></p>
        <button>купить</button>
      </div>
    </div>
  )
}
