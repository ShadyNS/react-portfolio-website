import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Where I have worked</h5>
      <h2>Industry Experience</h2>
      <container className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Oracle (Current)</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Joined in Sept 2020</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Working as an Associate Applications Developer</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Part of Oracle FLEXCUBE Development Team</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Major contributor in the UI development of the Settlement related screens under Corporate Deposit module</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Worked on API development using Springboot and API integration in UI as well</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>Also write unit Test cases for developed components using Jasmine and Karma</p>
            </li> */}
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Worked on the UI Automation project using Cucumber, Selenium and Java from scratch</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Chaayos</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Worked as a Full Stack Developer Intern from Dec 2019 to June 2022</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developed an Android app named "Stock Take" to perform Stock Taking and Inspection activities using QR code scanning within the app</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developed the Profile module in the Chaayos app available on AppStore in iOS and Play Store in Android using React Native</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Worked on API development using Springboot</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Savor App</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Worked as a freelancer on this project in July 2020</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Worked on the UI development of the app using React Native</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developed source and destination input with smart suggestions using Google Maps API</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implemented Google Maps in React Native with source and destination selection options</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implemented route visualisation from source to destination</p>
            </li>
          </ul>
        </article>
      </container>
    </section>
  )
}

export default Services