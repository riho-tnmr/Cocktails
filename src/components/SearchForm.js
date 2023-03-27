import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setInputText, setKind } = useGlobalContext();

  const searchValue = useRef('');
  const selectValue = useRef('');

  const searchCocktail = () => {
    setInputText(searchValue.current.value);
  }
  const handleKinds = () => {
    setKind(selectValue.current.value);
  }

  // useEffect(() => {
  //   searchValue.current.focus();
  // },[])

  return (
    <section className="section search">
      <h2 className='search-title'>Find Your Favorite Cocktails.</h2>
      <form className="search-form" onSubmit={(e) => {e.preventDefault();}}>
        <div className="form-control">
          <label htmlFor="name" className='form-input'>
            <input type="text" 
                    name='name' 
                    id='name' 
                    ref={searchValue}
                    onChange={searchCocktail}/>
          </label>
          <div className='search-form__select'>
            <label htmlFor="kind">
                <select name="kind" 
                        id="kind" 
                        className='form-select' 
                        ref={selectValue}
                        onChange={handleKinds}>
                  <option value="ALL">ALL</option>
                  <option value="ALCOHOL">ALCOHOL</option>
                  <option value="NON-ALCOHOL">NON-ALCOHOL</option>
                </select>
            </label>
          </div>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
