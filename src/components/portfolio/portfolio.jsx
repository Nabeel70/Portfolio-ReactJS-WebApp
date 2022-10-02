import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Mental-Health-Services-–-Healing-Mynd.png';
import IMG2 from '../../assets/Ambaram-PLM-Software-for-Fashion-Industry.png';
import IMG3 from '../../assets/My-Website-–-Just-another-WordPress-site.png';
import IMG4 from '../../assets/Asphalt.png';
import IMG5 from '../../assets/ScrubNDetail-–-Mobile-Car-Detailing.png';
import IMG6 from '../../assets/Escape925.png';
import IMG7 from '../../assets/Romy-Kaiser-NL.png';
import IMG8 from '../../assets/law.png';
import IMG9 from '../../assets/Arcadea-Group.png';
import IMG10 from '../../assets/Background-removal-Ai-Web-App.png';
import IMG11 from '../../assets/scandiweb.png';
import IMG12 from '../../assets/navicobd.png';

const portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Projects</h2>
    <div class="container portfolio__container">
      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG1} alt="main img" />
        </div>
        <h3>Health Department WebApp</h3>
        <div className="portfolio__item__cta">
        <a href="https://github.com/Nabeel70">Github</a>
        <a href="https://healingmynd.com/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
        
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG2} alt="main img" />
        </div>
        <h3>Ecommerce WebApp</h3>
        <div className="portfolio__item__cta">
        <a href="https://github.com/Nabeel70">Github</a>
        <a href="http://ambaram.ai/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>

      </article>


      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG3} alt="main img" />
        </div>
        <h3>Expo Landing Page</h3>
        <div className="portfolio__item__cta">
        <a href="https://github.com/Nabeel70">Github</a>
        <a href="https://alff.epizy.com/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG4} alt="main img" />
        </div>
        <h3>Driveway Sealing WebApp</h3>
        <div className="portfolio__item__cta">
        <a href="https://github.com/Nabeel70">Github</a>
        <a href="https://drivewaysealingbrampton.ca/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>

      </article>


      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG5} alt="main img" />
        </div>
        <h3>Car washing Service WebApp</h3>
        <div className="portfolio__item__cta">
        <a href="https://github.com/Nabeel70">Github</a>
        <a href="https://scrubndetail.ca/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG6} alt="main img" />
        </div>
        <h3>LMS system WebApp</h3>
        <div className="portfolio__item__cta">
        <a href="https://github.com/Nabeel70">Github</a>
        <a href="https://escape925.com/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
      </article>


      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG7} alt="main img" />
        </div>
        <h3>Ecomerce WebApp</h3>
        <div className="portfolio__item__cta">
        <a href="https://github.com/Nabeel70">Github</a>
        <a href="https://rkboutique.nl/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG8} alt="main img" />
        </div>
        <h3>Law Services WebApp</h3>
        <div className="portfolio__item__cta">
        <a href="https://github.com/Nabeel70">Github</a>
        <a href="https://ontargetpestcontrolservices.com/360law/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
      </article>


      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG9} alt="main img" />
        </div>
        <h3>Arceda Blog WebApp</h3>
        <div className="portfolio__item__cta">
        <a href="https://github.com/Nabeel70">Github</a>
        <a href="https://lashleticandbeautybar.com/bradhanks/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
      </article>


      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG10} alt="main img" />
        </div>
        <h3>Image Background Removal WebApp</h3>
        <div className="portfolio__item__cta">
        <a href="https://github.com/Nabeel70">Github</a>
        <a href="http://removeai.epizy.com/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>

      </article>


      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG11} alt="main img" />
        </div>
        <h3>Add/Delete Product WebApp</h3>
        <div className="portfolio__item__cta">
        <a href="https://github.com/Nabeel70">Github</a>
        <a href="https://scandiwebtest70.000webhostapp.com/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
       </article>


      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG12} alt="main img" />
        </div>
        <h3>Marine Service Ecommerce WebApp</h3>
        <div className="portfolio__item__cta">
        <a href="https://github.com/Nabeel70">Github</a>
        <a href="https://navicobd.com/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
        </div>
      </article>
    </div>
    </section>
  )
}

export default portfolio