import React, { Component } from 'react';


class Recipe extends Component {
    render() { 
        return ( 
            <a href={`/recipes/${this.props.recipe.id}`} className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{this.props.recipe.title}</h5>
              </div>
              <p className="mb-1">{this.props.recipe.description}</p>
              <small>{this.props.recipe.category} {this.props.recipe.cuisine}</small>
            </a>
         );
    }
}
 
export default Recipe;