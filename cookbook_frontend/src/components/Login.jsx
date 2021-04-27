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
        fetch('http://127.0.0.1:8000/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(res => { if (res.status == 200) return res.json(); else return null})
        .then(res => {
            localStorage.setItem('access_token', res.access)
            localStorage.setItem('refresh_token', res.refresh)
            window.location.href='/'
        })
        .catch(error => {
            const err = document.getElementById('error-msg')
            err.innerHTML = "Login Failed"
        })
        event.preventDefault()
    }


    render() { 
        return ( 
            <React.Fragment>
                <p id="error-msg"></p>
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