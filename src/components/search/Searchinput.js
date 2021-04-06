import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap'
import RegularCard from '../cards/RegularCard';
import SearchForm from './SearchForm'

function Searchinput() {
    const [search, setSearch] = useState(null);
    const [drinks, setDrinks] = useState([]);
    const getCocktailsForSearch = () => {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + search)
            .then(function (response) {
                setDrinks(response.data.drinks);
                console.log(response.data.drinks);
            });
    };
    useEffect(() => {
        search && getCocktailsForSearch();
}, [search]);        

    return (
        <div>
            <Container>
                <SearchForm setSearch={setSearch} />

                <div>
                    {drinks?.map((drink, index) => {
                        const { idDrink, strDrink, strDrinkThumb, strInstructions } = drink;
                        return <RegularCard key={index} id={idDrink} title={strDrink}
                            thumbnail={strDrinkThumb}
                            description={strInstructions} />
                    })}


                </div>
            </Container>
        </div>
    )
}

export default Searchinput
