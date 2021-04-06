import React from 'react'
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';
import { menus } from '../../dummydata/menus';
import CocktailNavbar from '../header/CocktailNavbar';


function SearchForm(props) {
    const {setSearch}=props
    const { register, handleSubmit } = useForm();
    const onSubmit = data => setSearch(data.DrinkName);

    return (
        <div>
            <Container>
                <CocktailNavbar menus={menus} brandName="Cocktail DB" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input  {...register("DrinkName")} placeholder="Search" />
                    <button type="submit">Search</button>
                </form>
            </Container>
        </div>
    )
}

export default SearchForm
