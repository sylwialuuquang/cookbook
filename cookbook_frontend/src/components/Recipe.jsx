import React, { Component } from 'react';


class Recipe extends Component {
    render() { 
        return ( 
            <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{this.props.recipe.title}</h5>
              </div>
              <p class="mb-1">{this.props.recipe.description}</p>
              <small>{this.props.recipe.category} {this.props.recipe.cuisine}</small>
            </a>
         );
    }
}
 
export default Recipe;