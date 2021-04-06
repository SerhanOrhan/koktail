import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import React from 'react'
import Home from './pages/Home';
import Categoryform from './components/category/Categoryform';
import Iteminstruction from './components/category/ItemInstruction';
import Searchinput from './components/search/Searchinput';

function App() {
  return (
    <Router>

        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/category">
          <Categoryform/>
        </Route>
        <Route exact path="/search/">
          <Searchinput/>
        </Route>
        <Route exact path="/detail/:id">
          <Iteminstruction/>
        </Route>
    </Router>
  )
}

export default App;


