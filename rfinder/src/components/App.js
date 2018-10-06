import React, {Component} from 'react';
import SearchRecipe from './SearchRecipe';
import '../style/index.css';
import RecipeList from './RecipeList';
import {Link } from 'react-router-dom';
class App extends Component{
    render(){
        return(
            <div>
                <h2>Recipie Finder</h2>
                <SearchRecipe/>
                <RecipeList/>
               
            </div>
        )
    }
}
export default App;