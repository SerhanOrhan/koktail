import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Categoryitems from './Categoryitems';
import { Container } from 'react-bootstrap';

function Regularitems() {
    const [drinks, setDrinks] = useState([]);
    const getCocktailsForRegular = () => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
            .then(function (response) {
                setDrinks(response.data.drinks);
                console.log(response.data.drinks);
            });
    };
    useEffect(() => {
        getCocktailsForRegular();
    }, []);
    return (
        <Container>
            <div className="d-flex flex-column">
                {drinks?.map((drink) => {
                    const { strDrink, strDrinkThumb } = drink;
                    return <Categoryitems title={strDrink}
                        thumbnail={strDrinkThumb} />
                })}

            </div>
        </Container>
    )
}

export default Regularitems;
