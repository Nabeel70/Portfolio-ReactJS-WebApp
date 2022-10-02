import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>WordPress Development</h3>
        </div>

        <ul className="service__list">
          <li>
          <BiCheck className="service__list-icon" />
          <p>UI/UX design</p>
          </li>
          <li>
          <BiCheck className="service__list-icon" />
          <p>Frontend design & development</p>
          </li>
          <li>
          <BiCheck className="service__list-icon" />
          <p>Plugin and theme development</p>
          </li>
          <li>
          <BiCheck className="service__list-icon" />
          <p>Page Builder experience</p>
          </li>
          <li>
          <BiCheck className="service__list-icon" />
          <p>All type of forms experience</p>
          </li>
        </ul>
      </article>


              {/* End of Block*/}



      <article className="service">
      <div className="service__head">
        <h3>Frontend Development</h3>
      </div>

      <ul className="service__list">
        <li>
        <BiCheck className="service__list-icon" />
        <p>HTML5, CSS3, Bootstrap</p>
        </li>
        <li>
        <BiCheck className="service__list-icon" />
        <p>Tailwind, PSD, Figma to HTML</p>
        </li>
        <li>
        <BiCheck className="service__list-icon" />
        <p>ReactJS</p>
        </li>
        <li>
        <BiCheck className="service__list-icon" />
        <p>GraphQL, Rest API</p>
        </li>
        <li>
        <BiCheck className="service__list-icon" />
        <p>SASS, NPM, JQuery</p>
        </li>
      </ul>
    </article>



               {/* End of Block*/}



    <article className="service">
    <div className="service__head">
      <h3>Backend Development</h3>
    </div>

    <ul className="service__list">
      <li>
      <BiCheck className="service__list-icon" />
      <p>NodeJS, JavaScript</p>
      </li>
      <li>
      <BiCheck className="service__list-icon" />
      <p>PHP, Python</p>
      </li>
      <li>
      <BiCheck className="service__list-icon" />
      <p>Express, Git, GitHub</p>
      </li>
      <li>
      <BiCheck className="service__list-icon" />
      <p>Redux, PostMan server for API testing</p>
      </li>
      <li>
      <BiCheck className="service__list-icon" />
      <p>MySQL, PSQL, MongoDB</p>
      </li>
    </ul>
  </article>

                     {/* End of Block*/}



    </div>
    </section>
  )
}

export default Services