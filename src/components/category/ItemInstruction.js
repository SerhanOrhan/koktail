import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { menus } from '../../dummydata/menus';
import ItemCard from '../cards/ItemCard';
import CocktailNavbar from '../header/CocktailNavbar';

function ItemInstruction() {
    let { id } = useParams();
    const [drinks, setDrinks] = useState([]);
    const getCocktailsForSearch = () => {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+id)
            .then(function (response) {
                setDrinks(response.data.drinks);
                console.log(response.data.drinks);
            });
    };
    useEffect(() => {
        getCocktailsForSearch();
    }, []);
    return (
        <div>
            <Container>
            <CocktailNavbar menus={menus} brandName="Cocktail DB" />
        
            {drinks?.map((drink) => {
                const { idDrink, strDrink, strDrinkThumb, strInstructions,strCategory,strGlass,strAlcoholic,strMeasure1,strIngredient1,strMeasure2,strIngredient2,strMeasure3,strIngredient3,strMeasure4,strIngredient4,strMeasure5,strIngredient5,strMeasure6,strIngredient6,strMeasure7,strIngredient7,strMeasure8,strIngredient8 } = drink;
                return <ItemCard  id={idDrink} title={strDrink}
                    thumbnail={strDrinkThumb}
                    description={strInstructions}
                    category={strCategory} glasstype={strGlass} kokalcoholic={strAlcoholic}
                    measure1={strMeasure1} ingredient1={strIngredient1}
                    measure2={strMeasure2} ingredient2={strIngredient2}
                    measure3={strMeasure3} ingredient3={strIngredient3}
                    measure4={strMeasure4} ingredient4={strIngredient4}
                    measure5={strMeasure5} ingredient5={strIngredient5}
                    measure6={strMeasure6} ingredient6={strIngredient6}
                    measure7={strMeasure7} ingredient7={strIngredient7}
                    measure8={strMeasure8} ingredient8={strIngredient8} />
            })}
            </Container>
        </div>
    )
}

export default ItemInstruction
