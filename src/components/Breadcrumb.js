import { Link } from 'react-router-dom'

const Breadcrumb = ({ name }) => {
  return (
    <div className='breadcrumb'>
    <ul>
        <li><Link to='/'>home</Link></li>
        <li>{name}</li>
    </ul>
    </div>
  )
}
export default Breadcrumb