import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import BaseRouter from './routes'

import Layout from './containers/Layout'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Layout {...this.props}>
            <BaseRouter />
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
