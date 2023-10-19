import './App.css'

import me from './assets/me.jfif'
import JSIcon from './assets/js.svg'
import HTMLIcon from './assets/html.svg'
import CSSIcon from './assets/css.svg'
import PyIcon from './assets/py.svg'
import NRIcon from './assets/nreact.svg'
import GDIcon from './assets/gd.svg'
import CPPIcon from './assets/cpp.svg'
import CSIcon from './assets/cs.svg'

import LinkIcon from './components/LinkIcon.jsx';
import BoxProject from './components/BoxProject.jsx';
import Header from './components/Header.jsx';
import TextIcon from './components/TextIcon.jsx';
import BoxImg from './components/BoxImg';

import { PROJECTS_SORTED } from './assets/Projects'

console.log(PROJECTS_SORTED)

export default function App() {
  return (
    <>
      <Header/>
      <main>
        <section id='home'>
          <article>
            <div className='content'>
              <h1 className='title'>Bonjour, je m'appelle Lenny 👋</h1>
              <p className='description'>J'ai 17 ans et je suis un développeur Junior qui aiment apprendre de nouvelles technologies, faire des projets seuls ou en équipe. Cela fait cinq ans que j'aime développer tout en m'amusant, des applications ou bien faire des extensions de jeu vidéo comme Minecraft. J'aimerais devenir développeur de jeu vidéo.</p>
            </div>
            <TextIcon text='Nantes, Loire-Atlantique'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </TextIcon>
          </article>
          <div className='img'>
            <BoxImg img={me} />
          </div>
        </section>
        <section id='about'>
          <div className='container'>
            <div className='header'>
              <h1 className='title'>Curieux de me connaître ?</h1>
            </div>
            <div className='content'>
              <div className='biographie'>
                <p>J'ai découvert la programmation informatique dès l'âge de 12 ans avec Minecraft Java Édition. J'ai décidé par la suite d'approfondir mes connaissances en fessant des bots Discord en JavaScript. Par la suite j'ai décidé de faire des sites web en HTML, CSS, JavaScript sans framework.</p>
                <p>Une fois que j'avais une base solide avec ces langages j'ai décidé de me pencher sur des frameworks : NextJs, React, React-Native. J'ai également découvert le monde de la programmation de jeu vidéo, j'ai longuement hésité à partir sur Unity ou sur Unreal Engine, mais mon choix c'est finalement porté sur Godot Engine.</p>
                <p>Je souhaite travailler en tant que développeur, toutes les branchent me plaisent, que ce soit le back-end, le front-end, le mobile, le jeu vidéo, toutes m'apporteront de l'expérience, ainsi je pourrais me spécialiser par rapport à celle que j'aimerais le plus à l'avenir.</p>
                <p>J'ai toujours aimé le fait qu'on puisse créer tout ce qu'on veut avec la programmation informatique, de pouvoir également automatiser tout un système. J'aime beaucoup me creuser la tête pour pouvoir faire un code propre et compact avec une sûreté que je peux le relire dans deux mois.</p>
              </div>
            </div>
          </div>
        </section>
        <section id='skills'>
          <div className='container'>
            <div className='header'>
              <h1 className='title'>Mes compétences</h1>
            </div>
            <div className='content'>
              <TextIcon style='column' text='HTML' icon={HTMLIcon}/>
              <TextIcon style='column' text='CSS' icon={CSSIcon}/>
              <TextIcon style='column' text='JavaScript' icon={JSIcon}/>
              <TextIcon style='column' text='Python' icon={PyIcon}/>
              <TextIcon style='column' text='C++' icon={CPPIcon}/>
              <TextIcon style='column' text='C#' icon={CSIcon}/>
              <TextIcon style='column' text='Godot Script' icon={GDIcon}/>
              <TextIcon style='column' text='React-Native' icon={NRIcon}/>
            </div>
          </div>
        </section>
        <section id='projects'>
          <div className='container'>
            <div className='header'>
              <h1 className='title'>Mes projets</h1>
            </div>
            <div className='content'>
              {PROJECTS_SORTED.map((project, i) => {
                return (
                  <BoxProject
                  key={i}
                  title={project.title}
                  description={project.description}
                  list={project.list}
                  linkProject={project.link}
                  tags={project.tags}
                />
                )
              })}
            </div>
          </div>
        </section>
        <section id='contact'>
          <div className='container'>
            <div className='header'>
              <h1 className='title'>Mes moyens de contact</h1>
              <p className='description'>N'hésitez pas à me contacter si vous recherchez un développeur junior, ou si vous avez une question.</p>
            </div>
            <div className='content'>
              <div className='simpleContact'>
                <TextIcon href='mailto:lennylqs44@gmail.com' text='lennylqs44@gmail.com'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M26.6665 5.3335H5.33317C3.86041 5.3335 2.6665 6.5274 2.6665 8.00016V24.0002C2.6665 25.4729 3.86041 26.6668 5.33317 26.6668H26.6665C28.1393 26.6668 29.3332 25.4729 29.3332 24.0002V8.00016C29.3332 6.5274 28.1393 5.3335 26.6665 5.3335Z" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M29.3332 9.3335L17.3732 16.9335C16.9615 17.1914 16.4856 17.3282 15.9998 17.3282C15.5141 17.3282 15.0381 17.1914 14.6265 16.9335L2.6665 9.3335" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </TextIcon>
                <TextIcon href='tel:0780376980' text='07 80 37 69 80'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M29.3334 22.56V26.56C29.3349 26.9313 29.2589 27.2989 29.1101 27.6391C28.9613 27.9793 28.7431 28.2848 28.4695 28.5358C28.1959 28.7868 27.8728 28.9779 27.5211 29.0969C27.1693 29.2159 26.7966 29.2601 26.4267 29.2266C22.3239 28.7808 18.3827 27.3788 14.9201 25.1333C11.6985 23.0862 8.96719 20.3549 6.92007 17.1333C4.66671 13.6549 3.2644 9.69463 2.82674 5.5733C2.79342 5.20459 2.83724 4.83298 2.95541 4.48213C3.07357 4.13128 3.2635 3.80889 3.51309 3.53546C3.76269 3.26204 4.06648 3.04358 4.40513 2.894C4.74378 2.74441 5.10986 2.66698 5.48007 2.66663H9.48007C10.1271 2.66026 10.7545 2.8894 11.2451 3.31134C11.7357 3.73328 12.0562 4.31923 12.1467 4.95997C12.3156 6.24006 12.6287 7.49694 13.0801 8.70663C13.2595 9.18387 13.2983 9.70252 13.1919 10.2011C13.0856 10.6998 12.8386 11.1574 12.4801 11.52L10.7867 13.2133C12.6848 16.5514 15.4487 19.3152 18.7867 21.2133L20.4801 19.52C20.8426 19.1615 21.3003 18.9144 21.7989 18.8081C22.2975 18.7018 22.8162 18.7406 23.2934 18.92C24.5031 19.3714 25.76 19.6845 27.0401 19.8533C27.6878 19.9447 28.2793 20.2709 28.7021 20.77C29.125 21.269 29.3496 21.9061 29.3334 22.56Z" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </TextIcon>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};