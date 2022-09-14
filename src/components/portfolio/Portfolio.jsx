/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image: IMG2,
    title:'Spending Planner + React' ,
    github:'https://github.com/ZambaV8/02Planificador-de-gastos-react',
    demo:'https://control-de-gastos-react02.netlify.app/'
  },
  {
    id:2,
    image: IMG3,
    title:'Patient Managment for Vet + React' ,
    github:'https://github.com/ZambaV8/VeterinariaReact',
    demo:'https://veterinaria-react01.netlify.app/'
  },
  {
    id:3,
    image: IMG4,
    title:'FullStack Project - Digital House 2022' ,
    github:'https://github.com/Tatulio/grupo_7_ewine.git',
    demo:''
  },
  {
    id:4,
    image: IMG1,
    title:'Crypto Quoter Api + React' ,
    github:'https://github.com/ZambaV8/Cripto-Cotizador-React',
    demo:'https://crypto-cotizador-react03.netlify.app/'
  }
  
]




const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">            
                   <img src={image} alt={title} />
                </div>
                   <h3>{title}</h3>
                <div className="portfolio__item-cta">
                   <a href={github} className="btn" target="_blank">Github</a>
                   <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
          
       </div>
       
    </section> )
  
  
  }


export default Portfolio