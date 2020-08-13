import React from 'react' ;

//* SPA = simple page application
import { Link } from 'react-router-dom'

//* Importando os icones
import logoImg from '../../assets/images/logo.svg' 
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

//* importando o css da pasta
import './styles.css';


//* Componente Landing
function Landing(){
    return (
      <div id="page-landing">
        <div id="page-landing-content" className="container">
          <div className="logo-container">
              <img src={logoImg} alt="Proffy" />
              <h2>Sua plataforma de estuds online.</h2>
          </div>
             
            <img src={landingImg} 
             alt="Plataforma de estudos" 
             className="hero-image"
            />
          
          <div className="buttons-container">
             
             
              
              <Link to="/study" href="" className="study" >
                  <img src={studyIcon} alt="Estudar" />
                  Estudar
               </Link>

              <Link to="/give-classes" href="" className="give-classes">
                  <img src={giveClassesIcon} alt="Estudar" />
                  Dar aula
              </Link>

          </div>
           <span className="total-connections">
              Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="" />
          </span>
        </div>
      </div>
    )
}

export default Landing;