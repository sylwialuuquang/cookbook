import React, { Component } from 'react';
import axios from 'axios'


class RecipeFilter extends Component {
    state = { 
        categories: [],
        cuisines: [],
     }

    componentDidMount() {
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/categories/',
        })
        .then(response => {
            this.setState({
                categories: response.data
            })
        })

        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/cuisine/',
        })
        .then(response => {
            this.setState({
                cuisines: response.data
            })
        })
    }


    render() { 
        let i = 0
        let j = 0
        return ( 
            <form className="d-flex my-3">
                <select className="form-select me-3" aria-label="Default select example" id="category" onChange={this.props.handleCategoryChange}>
                    <option disabled selected value> Category </option>
                    {this.state.categories.map(category => (
                        <option key={i+=1}>{category}</option>
                    ))}
                </select>
                <select className="form-select" aria-label="Default select example" id="cuisine" onChange={this.props.handleCuisineChange}>
                    <option disabled selected value> Cuisine </option>
                    {this.state.cuisines.map(cuisine => (
                        <option key={j+=1}>{cuisine}</option>
                    ))}
                </select>
            </form>
         );
    }
}
 
export default RecipeFilter;