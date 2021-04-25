import React, { Component } from 'react';
import axios from 'axios'

class IngredientList extends Component {
    state = { ingredients: [] }
    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/ingredients/',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('access_token'),
            }
        })
        .then(response => {
            this.setState({
                ingredients: response.data.map(item => {
                    return item.product
                })
            })
        })
    }
    render() { 
        return ( 
            <React.Fragment>
                <h2>Ingredients</h2>
                <ul class="list-group">
                    {this.state.ingredients.map(ingredient => (
                        <li class="list-group-item ingredients">{ingredient}</li>
                    ))}
                </ul>
            </React.Fragment>
         );
    }
}
 
export default IngredientList;