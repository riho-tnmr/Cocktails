import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import { useGlobalContext } from '../context'
import Loading from '../components/Loading'

const Home = () => {
  const { isError, isLoading } = useGlobalContext();
  return (
    <main>
      <SearchForm/>
      {isLoading && <Loading/>}
      {isError && <h2 className='section-title'>Something went wrong</h2>}
      {(!isLoading && !isError) && <>
        <CocktailList/>
      </>}
    </main>
  )
}

export default Home
