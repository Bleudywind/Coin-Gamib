import React from 'react'
import Logo from './../Image/Logo2x.png'
import './Login.css'

class Login extends React.Component {

    render() {
        return (
        <div className="mainLoginContainer">
            <img className="Logo" src={Logo}></img>
            <h1>The Coin's Gambit</h1>
        </div>
        );
    }
}
export default Login;