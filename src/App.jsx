import HTMLIcon from './assets/img/html.png'
import CSSIcon from './assets/img/css.png'
import JSIcon from './assets/img/js.png'
import PyIcon from './assets/img/py.png'
import CSIcon from './assets/img/cs.png'
import CPPIcon from './assets/img/cpp.png'
import GDSIcon from './assets/img/gd.png'
import ReactIcon from './assets/img/react.svg'

import Card from './components/Card';

const PROJECTS = [
  {
    weight: 1.4,
    id: 'ukiyo-ui',
    title: 'Ukiyo UI',
    desc: 'Description ! :D',
    tags: ['MB', 'UI'],
    projectLink: '#',
    slider: true
  },
  {
    weight: 1.8,
    id: 'baby-mobs',
    title: 'Baby Mobs',
    desc: 'Description 2 ! :D',
    tags: ['MB', 'BH'],
    projectLink: '#',
    slider: true
  },
  {
    weight: 2,
    id: 'undertale-between-world',
    title: 'Undertale Between World',
    desc: 'Description 3 ! :D',
    tags: ['PCG', 'UT']
  },
  {
    weight: 1.5,
    id: 'magica-idle',
    title: 'Magica Idle',
    desc: 'Description 4 ! :D',
    tags: ['MG']
  }
];

export default function App() {
  console.log(new URL('./assets/img/js.png', import.meta.url).href)
  return (
    <>
      <header className=''>
        <div className='lg'></div>
        <nav className='links'>
          <a href='#'>Présentation</a>
          <a href='#'>Expériences</a>
          <a href='#'>Compétences</a>
          <a href='#'>Contact</a>
        </nav>
      </header>
      <main>
        <section id='me'>
          <Card
            themeColor='blue'
            headerTitle='Présentation'
            container={[{
              title: 'À propos de moi',
              texts: [
                {
                  title: 'Qui suis-je ?',
                  content: "Je suis un passionné de programmation depuis mes 12 ans. Depuis je continue à faire de la programmation dans mon temps libre. J'envisage de devenir un Développeur de jeux-vidéo."
                },
                {
                  title: 'Pourquoi avoir fait ce site web ?',
                  content: "J'ai fait ce site web à l'aide de mes connaissances, pour que vous puissiez savoir qui je suis, ce que je sais faire, et voir mes projets plus facilement."
                }
              ]
            }]}
          />
        </section>
        <section id='experiences'>
          <Card
            themeColor='orange'
            headerTitle='Expériences'
            container={[
              {
                title: 'Diplômes',
                followDate: [
                  {
                    date: '2020 - 2021',
                    title: 'Brevet des collèges.'
                  },
                  {
                    date: '2021 - 2022',
                    title: 'Première année de BAC PRO MTNE.'
                  },
                  {
                    date: '2022 - 2023',
                    title: 'Service civique chez Unis-Cité en tant que Ambassadeur du numérique.'
                  }
                ]
              },
              {
                title: 'Mon service civique',
                texts: [
                  {
                    title: 'Thématiques abordés',
                    list: [
                      { text: 'Cyber-Harcèlement' },
                      { text: 'E-Réputation' },
                      { text: 'Addiction au numérique' },
                      { text: 'Les femmes dans le numérique' }
                    ]
                  },
                  {
                    title: 'Mini-Accord Game Week',
                    content: 'Le Mini-Accord Game-Week est un évènement qui avait pour but de faire découvrir aux jeunes des centres socioculturels, la VR, le rétro-gaming, mais aussi de faire quelques tournois.'
                  }
                ]
              }
            ]}
          />
        </section>
        <section id='skills'>
            <Card
              themeColor='red'
              headerTitle='Compétences'
              container={[
                {
                  title: 'Qualités',
                  texts: [
                    {
                      list: [
                        { text: 'Solaire' },
                        { text: 'Autonome' },
                        { text: 'Dynamique' },
                        { text: 'Rigoureux' },
                        { text: "Travail d'équipe" },
                        { text: "Capacité d'adaptation" }
                      ]
                    }
                  ]
                },
                {
                  title: 'Technologies',
                  texts: [
                    {
                      title: 'Langages de programmation',
                      linksImg: [
                        {
                          title: 'HTML',
                          img: HTMLIcon,
                          class: 'html',
                          href: 'https://fr.wikipedia.org/wiki/Hypertext_Markup_Language'
                        },
                        {
                          title: 'CSS',
                          img: CSSIcon,
                          class: 'css',
                          href: 'https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade'
                        },
                        {
                          title: 'JavaScript',
                          img: JSIcon,
                          class: 'js',
                          href: 'https://fr.wikipedia.org/wiki/JavaScript'
                        },
                        {
                          title: 'Python',
                          img: PyIcon,
                          class: 'py',
                          href: 'https://fr.wikipedia.org/wiki/Python_(langage)'
                        },
                        {
                          title: 'C#',
                          img: CSIcon,
                          class: 'cs',
                          href: 'https://fr.wikipedia.org/wiki/C_Sharp'
                        },
                        {
                          title: 'C++',
                          img: CPPIcon,
                          class: 'cpp',
                          href: 'https://fr.wikipedia.org/wiki/C%2B%2B'
                        },
                        {
                          title: 'GDScript',
                          img: GDSIcon,
                          class: 'gds',
                          href: 'https://fr.wikipedia.org/wiki/Godot_(moteur_de_jeu)#GDScript,_le_langage_de_script_de_Godot'
                        }
                      ]
                    },
                    {
                      title: 'Framework',
                      linksImg: [
                        {
                          title: 'React',
                          img: ReactIcon,
                          class: 'react',
                          href: 'https://fr.wikipedia.org/wiki/React'
                        }
                      ]
                    }
                  ]
                }
              ]}
            />
        </section>
        <section id='projects'>
              <Card
                themeColor='purple'
                headerTitle='Projets personnels'
                container={PROJECTS.sort((a, b) => b.weight - a.weight).slice(0, 3).map(x => {
                  return {
                    title: x.title,
                    texts: [
                      { content: x.desc }
                    ]
                  }
                })}
              />
        </section>
        <section id='contact'>
              <Card
                themeColor='yellow'
                headerTitle='Contact'
                container={[{
                  texts: [
                    { title: 'Numéro', link: {
                      type: 'phone',
                      content: '0780376980',
                      display: '07-80-37-69-80'
                    }},
                    { title: 'Adresse-mail', link: {
                      type: 'mail', 
                      content: 'lennylqs44@gmail.com'
                    }}
                  ]
                }]}
              />
        </section>
      </main>
    </>
  );
};