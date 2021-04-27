import React, { Component } from 'react';
import axios from 'axios';

class AuthService extends Component {
  componentDidMount() {
        this.setInterceptors();
  };
  
  setInterceptors = () => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("access_token");
        
        axios.interceptors.response.use(response => {
            return response;
        }, err => {
            return new Promise((resolve, reject) => {
                const originalReq = err.config;
                if ( err.response.status === 401 && err.config && !err.config.__isRetryRequest )
                {
                    originalReq._retry = true;

                    let res = fetch('http://127.0.0.1:8000/token/refresh/', {
                        method: 'POST',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'same-origin',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        redirect: 'follow',
                        referrer: 'no-referrer',
                        body: JSON.stringify({
                            refresh: localStorage.getItem("refresh_token")
                        }),
                    }).then(res => res.json()).then(res => {
                        if (!res.access) {
                            localStorage.removeItem('access_token')
                            localStorage.removeItem('refresh_token')
                            window.location.href = '/logout/'
                            return null
                        } else {
                            localStorage.removeItem('access_token')
                            localStorage.setItem('access_token', res.access)
                            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("access_token");
                            originalReq.headers['Authorization'] = 'Bearer ' + res.access;

                            return axios(originalReq);
                        }
                    });

                    resolve(res);
                }


                return Promise.reject(err);
            });
        });
  };
  render() {
      return (
          <React.Fragment></React.Fragment>
      )
  }
  
}
export default AuthService;