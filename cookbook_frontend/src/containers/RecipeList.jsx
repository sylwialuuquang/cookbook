import React, { Component } from 'react';
import axios from 'axios'

import Recipe from '../components/Recipe'


class RecipeList extends Component {
    state = { recipes: [] }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/recipes/',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('access_token'),
            }
        })
        .then(response => {
            this.setState({
                recipes: response.data
            })
        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <h2>Recipes</h2>
                <div className="list-group">
                    {this.state.recipes.map(recipe => (
                        <Recipe key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            </React.Fragment>
         );
    }
}
 
export default RecipeList;