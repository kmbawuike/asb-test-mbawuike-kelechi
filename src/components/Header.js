import React, {Fragment} from 'react';
import Navigation from './Navigation'
import Hero from '../images/Hero image.png'
import { IoIosInformationCircleOutline} from 'react-icons/io'

export default ()=>(
  <header className="main-header">
    <Navigation />
    <section className="heading">
      <article className="heading-article">
        <h2>Your music career success partner</h2>
        <h1>We back Nigerian indie artists from around the world and help them do their
         best work</h1>
        <p>We invest between N2m - N5m in marketing, production and promotional fees
         in youbg budding Nigerian artists and help them suceed with design support
          and our network of successful Indie musicians</p>
        <IoIosInformationCircleOutline className="heading-article-icon"/>
      </article>
      <figure>
        <img src={Hero}/>
      </figure>
    </section>
  </header>
)