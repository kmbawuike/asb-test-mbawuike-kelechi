import React from 'react';
import One from '../images/What we do section image 1.png'
import Two from '../images/What we do section image 2.png'
import Three from '../images/What we do section image 3.png'
import Articles from './Articles'
import {IoIosArrowRoundForward} from 'react-icons/io'
import MinusIcon from './MinusIcon'
import Mission from './Mission'
import Resouce from './Program';
import {Link} from 'gatsby'

const images = [One, Two, Three]
const titles = ['One', 'Two', 'Three']
const word = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "


export default (props)=>(
  <div className="blog-container">
  <h3 className="blog-caption" style={{ display: props.display }}>{props.caption}</h3>
    <section className="blog">
      <hr />
      <h3 className="program">{props.resource}</h3>
      <Mission />
      <div className="minus-icon-container">
        <MinusIcon />
        <MinusIcon />
      </div>
      <section className="article-container">
        {images.map((img) => <Articles image={img} title={titles[images.indexOf(img)]} content={word} />)}
      </section>
      <button style={{ display: props.show }} className="view-button">VIEW ALL RESOURCES <IoIosArrowRoundForward className="view-arrow"/></button>
    </section>
    
  </div>
)