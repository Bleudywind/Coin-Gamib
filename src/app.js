import React from 'react'
import './app.css'
import Login from './Pages/Login.js'

class mainPage extends React.Component {

    render () {
        return (
            <div className="mainContainer">
                <Login></Login>
            </div>
        );
    }
}

export default mainPage;