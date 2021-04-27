import React, { Component } from 'react';
import axios from 'axios'

import Recipe from '../components/Recipe'
import RecipeFilter from '../components/RecipeFilter'


class RecipeList extends Component {
    state = { 
        recipes: [],
        selected_category: null,
        selected_cuisine: null,
    }

    componentDidMount() {
        this.loadData(null, null)
    }

    loadData = (category, cuisine) => {
        let params = {}
        if (category) {
            params['category'] = category
        }
        if (cuisine) {
            params['cuisine'] = cuisine
        }
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/recipes/',
            params: params
        })
        .then(response => {
            this.setState({
                recipes: response.data,
                selected_category: category,
                selected_cuisine: cuisine
            })
        })
    }
    handleCategoryChange = (e) => {
        this.loadData(e.target.value, this.state.selected_cuisine)
    }

    handleCuisineChange = (e) => {
        this.loadData(this.state.selected_category, e.target.value)
    }

    render() { 
        return ( 
            <React.Fragment>
                <h2>Recipes</h2>
                <RecipeFilter handleCategoryChange={this.handleCategoryChange} handleCuisineChange={this.handleCuisineChange}/>
                <div className="recipe-list">
                    {this.state.recipes.map(recipe => (
                        <Recipe key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            </React.Fragment>
         );
    }
}
 
export default RecipeList;