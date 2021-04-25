import React from 'react'
import { Route } from 'react-router-dom'

import Login from './components/Login'
import Logout from './components/Logout'
import RecipeList from './containers/RecipeList'
import RecipeDetail from './components/RecipeDetail'


const BaseRouter = () => (
    <React.Fragment>
        <Route exact path='/' component={null} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/logout/' component={Logout} />
        <Route exact path='/recipes/' component={RecipeList} />
        <Route exact path='/recipes/:recipeID' component={RecipeDetail} />
    </React.Fragment>
)

export default BaseRouter