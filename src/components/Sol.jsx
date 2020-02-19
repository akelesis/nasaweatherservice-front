import React, { Component } from 'react'
import './Sol.css'
import axios from 'axios'
import cardCover from '../imgs/mars.jpg'

const baseUrl = 'http://localhost:8080/api/sols'

const initialState = {
    sol: {}
}

export default class Home extends Component {
    state = { ...initialState }
    UNSAFE_componentWillMount(){
        let id = this.props.match.params.id
        const newUrl = `${baseUrl}\\${id}`
        axios.get(newUrl)
            .then(res => {
                this.setState( {sol: res.data} )
                console.log(this.state.sol.averageTemp)
            })
            .catch(err => {console.log(err)})
    }

    returnHome(){
        this.props.history.push("/");
    }
    


    render() {
        const solDetails = 
        <div className="solLongVersion">
            <img src={cardCover} alt="mars surface"/>
            <p>Sol Nº {this.state.sol.sol}</p>
            <p>Average Temperature: {this.state.sol.averageTemp} °C</p>
            <p>Max Temperature: {this.state.sol.maxTemp} °C</p>
            <p>Min Temperature: {this.state.sol.minTemp} °C</p>
            <div className="returnButton" onClick={() => this.returnHome()} alt="Return Button">Return</div>
        </div>

        return (
            <div className="home">
                {solDetails}
            </div>
        )
    }
}