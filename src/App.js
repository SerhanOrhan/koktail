import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Routes, Route} from "react-router-dom";
import React from 'react'
import Home from './pages/Home';
import Categoryform from './components/category/Categoryform';
import Iteminstruction from './components/category/ItemInstruction';
import Searchinput from './components/search/Searchinput';


function App() {
  return (
    <>

      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/category">
          <Categoryform />
        </Route>
        <Route exact path="/search/">
          <Searchinput />
        </Route>
        <Route exact path="/detail/:id">
          <Iteminstruction />
        </Route>
      </Routes>
    </>
  )
}

export default App;


