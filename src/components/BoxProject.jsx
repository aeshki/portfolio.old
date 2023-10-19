import './BoxProject.style.css';
export default function BoxProject({ title, description, tags, linkProject, list }) {
  return (
    <div className='boxProject'>
        <div className='header'>
            <h3 className='title'>{title}</h3>
            <p className='description'>{description}</p>
        </div>
        {(linkProject || list) && (
            <div className='content'>
                {list && (<ul>{list.content?.map((x, i)=>(<li key={i}>{x.text}</li>))}</ul>)}
                {linkProject && (<a target='_blank' className='link' href={linkProject.href ?? '#'}>{linkProject.title ?? ''}</a>)}
            </div>
        )}
        <div className='tags'>
            {tags ? tags.map((tag, i) => (<span key={i} className="tag">{tag}</span>)) : <span>Aucun tag pour ce projet.</span>}
        </div>
    </div>
  );
};