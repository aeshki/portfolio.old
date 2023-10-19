import './TextIcon.style.css';
export default function TextIcon({ style, text, href, icon, children }) {
  return (
    <div className='textIcon' data-style={style}>
        {icon ? (<img width='112' src={icon} alt={`icon ${text}`}/>) : children}
        {href ? (<a href={href}>{text}</a>) : (<span>{text}</span>)}
    </div>
  );
};