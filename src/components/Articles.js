import React from 'react'

export default (props)=>(
  <article className="article">
    <figure>
      <img src={props.image} />
    </figure>
    <section className="article-content">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </section>
  </article> 
)


