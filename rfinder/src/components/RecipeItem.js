import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {favouriteRecipe} from '../actions';
class RecipeItem extends Component{
    constructor(){
        super();
        this.state={
            favorited:false
        }
    }
    favourite(recipe){
        this.props.favouriteRecipe(recipe);
        this.setState({favorited:true});

    }
    render(){
        
        return (

            <div className="recipe-item">
            {
                this.props.favoriteButton ?  this.state.favorited ?
                <div className="star">&#9733;</div>
                :
                <div onClick={()=>this.favourite(this.props.recipe)} className="star">
                    &#9734;
                </div>:<div></div>
            }
           
               
            
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