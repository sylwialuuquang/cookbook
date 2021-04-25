import React from 'react'
import { Route } from 'react-router-dom'

import Login from './components/Login'
import Logout from './components/Logout'


const BaseRouter = () => (
    <React.Fragment>
        <Route exact path='/' component={null} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/logout/' component={Logout} />
    </React.Fragment>
)

export default BaseRouter