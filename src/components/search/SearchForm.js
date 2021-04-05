import React from 'react'
import {Form, Button,FormControl, Container } from 'react-bootstrap';
import { menus } from '../../dummydata/menus';
import CocktailNavbar from '../header/CocktailNavbar';


function SearchForm() {
    return (
        <div>
            <Container>
            <CocktailNavbar menus={menus} brandName="Cocktail DB" />
            <Form inline className="search-form">
                <FormControl className="search-formcontrol" placeholder="Search" />
                <Button>Search</Button>
            </Form>
            </Container>
        </div>
    )
}

export default SearchForm
