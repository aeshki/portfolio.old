import './LinkIcon.style.css'
export default function LinkIcon({ href, icon, children }) {
  return <a className='icon' href={href} style={icon && {
      backgroundImage: `url(${icon})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>{children}</a>
};