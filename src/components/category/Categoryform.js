import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Categorylist from './Categorylist';
import { Container } from 'react-bootstrap';
import CocktailNavbar from '../header/CocktailNavbar';
import { menus } from '../../dummydata/menus';
import RegularCard from '../cards/RegularCard';




function Categoryform() {

    const [count, setCount] = useState("c=Cocktail");
    const [drinks, setDrinks] = useState([]);
    const [loading, setLoading] = useState(true);
    const getCocktailsForFilter = () => {
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?' + count)
                    .then(function (response) {
                            setDrinks(response.data.drinks);
                            console.log(response.data.drinks);
                            setLoading(false);
                    });
    };
    useEffect(() => {
            count && getCocktailsForFilter();
    }, [count]);        

    return (
        <Container>
            <CocktailNavbar menus={menus} brandName="Cocktail DB" />

            <div className="category-form">
                
            <Categorylist setCount={setCount} count={count}/>
        
            </div>
            <div className="container">
                                { loading == true ? (<h1>Loading...</h1>): drinks?.map((drink, index) => {
                                        const { idDrink, strDrink, strDrinkThumb, strInstructions } = drink;
                                        return <RegularCard key={index} id={idDrink} title={strDrink}
                                                thumbnail={strDrinkThumb}
                                                description={strInstructions} />
                                })}


                        </div>

        </Container>


    );
}

export default Categoryform;
