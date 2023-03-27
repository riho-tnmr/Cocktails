import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Breadcrumb from '../components/Breadcrumb'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { cocktailId } = useParams();
  const [cocktail, setCocktail] = useState(null);

  const fetchData = async () => {
    try {
      const resp = await axios(`${url}${cocktailId}`);
      const data  = await resp.data.drinks[0];
      const { strAlcoholic, 
              strDrink,
              strDrinkThumb,
              strGlass,
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
              strInstructions} = await data;

      const ingredients = await [ strIngredient1,
                            strIngredient2,
                            strIngredient3,
                            strIngredient4,
                            strIngredient5]
      const drink = await {
        name: strDrink,
        kind: strAlcoholic,
        img: strDrinkThumb,
        glass: strGlass,
        ingredients: ingredients,
        instructions: strInstructions
      }
      await setCocktail(drink);
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
    {cocktail?(
      <>
      <Breadcrumb name={cocktail.name}/>
      <section>
        <div className="single">
          <h1 className='single-ttl'>{cocktail.name}</h1>
          <p className='single-kind'>{cocktail.kind}</p>
          <img src={cocktail.img} alt={cocktail.name} />
          <h3>ingredients</h3>
            <ul>
              {cocktail.ingredients.map((ingredient, index) => {
                if(ingredient){
                  if(index != 0){
                    // return <li>&emsp;{`, &emsp; ${ingredient}`}</li>
                    return <li> ,&emsp;{ingredient}</li>
                  }else{
                    return <li>{ingredient}</li>
                  }
                }
              })}
            </ul>
          <h3>instruction</h3>
          <p>{cocktail.instructions}</p>
          <Link to='/' className='single-btn'>back</Link>
        </div>
      </section> 
      </>
    )
    :
    <Loading/>}
    </>
  )
}

export default SingleCocktail
