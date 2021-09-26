import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function LoginScreen() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleAdminLogin = (e) => {
        e.preventDefault();
        const newadmin = {
            email, password
        }

        axios.post('https://fypgic.herokuapp.com/api/admin/login', newadmin)
            .then(res => {
                if (res.status === 200 && res.statusText === "OK") {
                    localStorage.setItem('user', res.data._id)
                    history.push('/')
                }
                else {
                    history.push('/')
                    alert('email or password is incorrect')
                }
            })
            .catch(err => {
                console.log(err);
                alert('email or password is incorrect')
            })
        console.log(newadmin);
    }
    return (
        <div style={{ maxWidth: 650, margin: 'auto' }}>
            <h1>Govt Islamia College Faisalabad</h1>
            <form method="post">
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email"
                        className="form-control"
                        onChange={em => setEmail(em.target.value)}
                        placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password"
                        onChange={pas => setPassword(pas.target.value)}
                        className="form-control" placeholder="Password" />
                </div>

                <button
                    onClick={handleAdminLogin}
                    className="btn btn-secondary btn-lg btn-block mb-4">Login</button>

            </form>

        </div>
    )
}

export default LoginScreen
