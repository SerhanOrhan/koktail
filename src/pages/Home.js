
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import RegularCard from '../components/cards/RegularCard';
import CocktailNavbar from '../components/header/CocktailNavbar';
import {menus} from '../dummydata/menus';

function Home() {
    const [drinks, setDrinks] = useState([]);
    const [loading, setLoading] = useState(true); 
    const getCocktailsForSearch = () => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
            .then(function (response) {
                setDrinks(response.data.drinks);
                console.log(response.data.drinks);
                setLoading(false);
            });
    };
    useEffect(() => {
        getCocktailsForSearch();
    }, []);



    return (


        <Container>
            <CocktailNavbar menus={menus} brandName="Cocktail DB" />


            <div className="d-flex flex-column">
                {
                    loading == true ? (<h1>Loading...</h1>): drinks?.map((drink, index) => {
                        const { idDrink, strDrink, strDrinkThumb, strInstructions } = drink;
                
                    return <RegularCard key={index} id={idDrink} title={strDrink}
                        thumbnail={strDrinkThumb}
                        description={strInstructions}/>
                })}
            </div>
         

        </Container>


    );
}

export default Home;
