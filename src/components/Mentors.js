import React from 'react'
import {AiOutlineMinusCircle} from 'react-icons/ai'

export default (props)=>(
  <section className="mentor-profile">
    <figure>
      <img src={props.mentor}/>
    </figure>
    <div>
      <AiOutlineMinusCircle className="minus-icon" className="green-minus" />
      <AiOutlineMinusCircle className="minus-icon" className="green-minus"/>
    </div>
    <h3>{props.name}</h3>
    <p>{props.description}</p>
  </section>
)