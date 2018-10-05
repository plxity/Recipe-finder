import React, {Component} from 'react';
import SearchRecipe from './SearchRecipe';
import '../style/index.css';
class App extends Component{
    render(){
        return(
            <div>
                <h2>Recipie Finder</h2>
                <SearchRecipe/>
            </div>
        )
    }
}
export default App;