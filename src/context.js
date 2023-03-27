import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import axios from 'axios';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
// const url = '';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [inputText, setInputText] = useState('');
  const [kind, setKind] = useState('ALL');

  const fetchData = useCallback( async () => {
    try {
      const resp = await axios(url);
      const data = await resp.data.drinks;
      const newData = await data.map((drink) => {
        const {idDrink, strDrink, strDrinkThumb, strGlass, strAlcoholic} = drink;
        return {
          id: idDrink,
          name: strDrink,
          img: strDrinkThumb,
          glass: strGlass,
          kind: strAlcoholic,
        }
      })
      const filteredData = () => {
        if(kind === 'ALCOHOL'){
          return newData.filter(drink => {
            return drink.kind === "Alcoholic" && drink.name.toLowerCase().includes(inputText);
          });
        }
        if(kind === 'NON-ALCOHOL'){
          return newData.filter(drink => {
            if(drink.kind != "Alcoholic"){
              console.log(drink.kind);
            }
            return drink.kind != ("Alcoholic") && drink.name.toLowerCase().includes(inputText);
          });
        }
        else{
          return newData.filter(drink => drink.name.toLowerCase().includes(inputText));
        }
      }
      setData(filteredData())
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
      setIsError(true);
      setIsLoading(false);
    }
  }, [inputText, kind])

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <AppContext.Provider value={{data, 
                                setData, 
                                isError, 
                                setIsError,
                                isLoading,
                                setIsLoading,
                                inputText,
                                setInputText,
                                setKind}}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
