import axios from 'axios';
import React, { Component } from 'react';


class RecipeDetail extends Component {
    state = { recipe: null }

    componentDidMount() {
        const recipeID = this.props.match.params.recipeID
        axios({
            method: 'get',
            url: `http://127.0.0.1:8000/api/recipes/${recipeID}/`,
        })
        .then(response => {
            this.setState({
                recipe: response.data
            })
        })
    }
    render() { 
        return ( 
            <div>
                { this.state.recipe ?

                <React.Fragment>
                    <h3>{this.state.recipe.title} <span className="badge bg-secondary">{this.state.recipe.category}</span> <span className="badge bg-secondary">{this.state.recipe.cuisine}</span></h3>
                    <p>{this.state.recipe.description}</p>
                    <small>Cooktime: {this.state.recipe.cooktime} min</small>
                    <br/>
                    <small>Servings: {this.state.recipe.serving}</small>
                    <h5>Ingredients</h5>
                    <ul>
                    {this.state.recipe.ingredients.map(ingredient => (
                        <li>{ingredient}</li>
                    ))}
                    </ul>
                    <h5>Instructions</h5>
                    <ol>
                        {this.state.recipe.instructions.map(instruction => (
                            <li>{instruction}</li>
                        ))}
                    </ol>
                </React.Fragment>
                :
                <p>Loading....</p>
                }
            </div>
         );
    }
}
 
export default RecipeDetail;