const LINK_TYPES = {
    PHONE: 'tel:',
    MAIL: 'mailto:'
};

const PROJECTS = {
    'baby-mobs': {
        title: 'Baby Mobs'
    },
    'ukiyo-ui': {
        title: 'Ukiyo UI'
    }
}

import '../styles/Card.css'

function BoxTexts({ content }) {
    return (
        <div className='text'>
            {content.title && (<h3 className='title'>{content.title}</h3>)}

            {content.linksImg && (
                <div className='links-icon'>
                    {content.linksImg.map((x, i) => (
                        <a key={i} target='_blank' className='link-icon' href={x.href}>
                            <img className={x.class ? `icon ${x.class}` : 'icon'} width='80' src={x.img}/>
                            <span className='title'>{x.title}</span> 
                        </a>
                    ))}
                </div>
            )}

            {content.list && (<ul className='list'>{content.list.map((x, i) => (<li key={i}>{x.text}</li>))}</ul>)}

            {content.link && (<a className='link' href={`${LINK_TYPES[content.link.type.toUpperCase()]}${content.link.content}`}>{content.link.display ?? content.link.content}</a>)}

            {content.content && (<p>{content.content}</p>)}
        </div>
    );
};

function Box({ content }) {    
    return (
        <div className='box'>
            {content.title && <h2 className='title'>{content.title}</h2>}

            {content.followDate && <ul className='followDate'>
                {content.followDate.map((x, i) => {
                    return <li key={i} className='content'><span className='date'>{x.date}</span> {x.title}</li>
                })}
            </ul>}

            {content.texts && content.texts.map((x, i) => <BoxTexts content={x} key={i} />)}
        </div>
    );
};

export default function Card({ themeColor = 'blue', headerTitle, container }) {
    return (
        <div className='card' data-theme-color={themeColor}>
            <div className='header'>
                <h1 className='title'>{headerTitle}</h1>
            </div>
            <div className='container'>
                {container && container.map((x, i) => <Box key={i} content={x} />)}
            </div>
        </div>
    );
};


/*
    CARD
    - HEADER
    - CONTAINER
        - BOX
            - title
            - embed | [COMPONENTS]
                - title [ONLY-ONE]
                - text
                - textDate
                - list
                <TYPE> - Project
                    - slider
                    - tags
                    - projectLink
            - form | [COMPONENTS ALL-ONLY]
                - firstname textBox
                - lastname textBox
                - message textBox
                - submit button
*/