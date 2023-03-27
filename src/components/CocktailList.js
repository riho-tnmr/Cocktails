import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { data } = useGlobalContext();

  // console.log(drinks);
  return (
    <section>
      {data.length > 0
      ?
      <>
      <div className="cocktails-center">
        {data.map((drink) => {
            return <Cocktail drink={drink} key={drink.id}/>
          })} 
      </div>
      </>
      : <h2 className='section-title'>No Cocktails Matched Your Search Criteria</h2>
      }
    </section>
  )
}

export default CocktailList
