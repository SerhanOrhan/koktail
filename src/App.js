import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import RegularCard from './components/cards/RegularCard';
import CocktailNavbar from './components/header/CocktailNavbar';
import {menus} from './dummydata/menus';

function App() {
  const [drinks, setDrinks] = useState([]);
  const getCocktailsForSearch = () => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      .then(function(response) {
        setDrinks(response.data.drinks);
        console.log(response.data.drinks);
      });
  };
  useEffect(() => {
    getCocktailsForSearch();
  }, []);
  return (
    <Container>
      <CocktailNavbar menus={menus} brandName="Cocktail DB"/>
      <div className="d-flex flex-column">
        {drinks?.map((drink,index)=>{
          const {idDrink, strDrink, strDrinkThumb, strInstructions} = drink;
          return <RegularCard key={index} id={idDrink} title={strDrink}
                              thumbnail={strDrinkThumb}
                              description={strInstructions}/>
        })}

      </div>
    </Container>
  );
}

export default App;

