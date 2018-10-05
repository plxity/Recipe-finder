import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {favouriteRecipe} from '../actions';
class RecipeItem extends Component{

    render(){
        
        return (
            <div className="recipe-item">
                <div onClick={()=>this.props.favouriteRecipe(this.props.recipe)} className="star">
                    &#9734;
                </div>

            
                <div className="recipe-text">
                        <a href={this.props.recipe.href}>
                            <h4>
                                {this.props.recipe.title}
                            </h4>
                        </a>
                        <p>
                            {this.props.recipe.ingredients}
                        </p>
                </div>
              
                <img src={this.props.recipe.thumbnail} alt={this.props.recipe.title} className="recipe-img"/>
            </div>
            
        );
    }
}
export default connect(null,{favouriteRecipe})(RecipeItem);