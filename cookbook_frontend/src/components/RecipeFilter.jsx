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
        return ( 
            <div className="d-flex">
                <form>
                    <select className="form-select" aria-label="Default select example" id="category" onChange={this.props.handleCategoryChange}>
                        <option disabled selected value> Category </option>
                        {this.state.categories.map(category => (
                            <option value={category}>{category}</option>
                        ))}
                    </select>
                    <select className="form-select" aria-label="Default select example" id="cuisine" onChange={this.props.handleCuisineChange}>
                        <option disabled selected value> Cuisine </option>
                        {this.state.cuisines.map(cuisine => (
                            <option>{cuisine}</option>
                        ))}
                    </select>
                </form>
            </div>
         );
    }
}
 
export default RecipeFilter;