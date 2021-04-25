import React, { Component } from 'react';

import Navbar from '../components/Navbar'

class Layout extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <Navbar />
                <div className="container-fluid mt-3">
                   <div className="site-layout-content">{this.props.children}</div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Layout;