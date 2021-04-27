import React, { Component } from 'react';
import axios from 'axios'

class IngredientList extends Component {
    state = { ingredients: [] }
    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/ingredients/',
        })
        .then(response => {
            this.setState({
                ingredients: response.data.map(item => {
                    return item
                })
            })
        })
    }
    render() { 
        let i = 0
        return ( 
            <React.Fragment>
                <h2>Ingredients</h2>
                <ul className="no-bullets">
                    {this.state.ingredients.map(ingredient => (
                        <li className="" key={i+=1}>{ingredient}</li>
                    ))}
                </ul>
            </React.Fragment>
         );
    }
}
 
export default IngredientList;