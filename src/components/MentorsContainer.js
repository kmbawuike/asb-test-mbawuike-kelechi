import React from 'react'
import KillerMike from '../images/Mentors section image 1 - Killer Mike.png'
import Timeberland from '../images/Mentors section image 2 - Timbaland.png'
import Chance from '../images/Mentors section image 3 - Chance the rapper.png'
import Mentors from './Mentors'
const mentorsImg = [KillerMike, Timeberland, Chance]
const mentorsName = ['Killer Mike','Timbaland', 'Chance the Rapper']
let i = 0;
const about = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
export default ()=> (
  <section className="mentors-container">
    <h2>Our Mentors</h2>
    <section className="mentors">
      {mentorsImg.map((mentor)=>(
        <Mentors mentor={mentor} description={about} name={mentorsName[mentorsImg.indexOf(mentor)]}/>
      ))}
    </section>
  </section>
)