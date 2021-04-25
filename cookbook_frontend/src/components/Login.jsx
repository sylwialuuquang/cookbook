import React, { Component } from 'react';
import axios from 'axios'


class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = { 
            username: '',
            password: ''
         }

        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    
     handleChangeUsername(event) {
        this.setState({ username: event.target.value })
    }

    handleChangePassword(event) {
        this.setState({ password: event.target.value })
    }

    handleSubmit(event) {
        axios.post('http://127.0.0.1:8000/token/', {
            username: this.state.username,
            password: this.state.password
        })
        .then(res => {
            localStorage.setItem('access_token', res.data.access)
            localStorage.setItem('refresh_token', res.data.refresh)
            window.location.href='/'
            setTimeout(() => {
                localStorage.removeItem('access_token')
                localStorage.removeItem('refresh_token')
                window.location.href='/logout/'
            }, 24 * 3600 * 1000)
        })
    }


    render() { 
        return ( 
            <React.Fragment>
                <form className="loginForm" onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="usernameInput" className="form-label">Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleChangeUsername} className="form-control" id="usernameInput" aria-describedby="basic-addon1" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" value={this.state.password} onChange={this.handleChangePassword} className="form-control" id="exampleInputPassword1" />
                  </div>
                  <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </React.Fragment>
         );
    }
}
 
export default LoginForm;