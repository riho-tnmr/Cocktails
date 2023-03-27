import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ drink }) => {
  const { id, name, img, kind, glass } = drink;
  
  return (
    <article key={id} className="cocktail">
      <Link to={`/cocktail/${id}`} className='cocktail-inner'>
        <div className="img-container">
          <img src={img} alt="" />
        </div>
        <div className="cocktail-footer">
          <div>
            <h3>{name}</h3>
            <p>{kind}</p>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default Cocktail

