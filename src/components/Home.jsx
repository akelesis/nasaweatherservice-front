import React, { Component } from 'react'
import './Home.css'
import axios from 'axios'
import cardCover from '../imgs/mars.jpg'

const baseUrl = 'http://localhost:8080/api/sols'

const initialState = {
    sols: [],
    solId: 0
}

export default class Home extends Component {
    state = {...initialState}

    UNSAFE_componentWillMount(){
        axios.post(baseUrl)
            .then(res => {
                axios.get(baseUrl)
                    .then(res => {
                        this.setState({sols: res.data})
                    })
                    .catch(err => {console.log(err)})
            })
            .catch(err => {console.log(err)})
    }

    getCompleteInfo(sol, index){
        this.props.history.push(`/sol/${index + 1}`);
    }
    


    render() {
        let cardsList = this.state.sols.map((sol, index) => {
            return <div className="solCard" onClick={e => this.getCompleteInfo(sol, index)} key={index}>
               <img src={cardCover} alt="mars surface"/>
                <p>Sol {sol.sol}</p>
                <p>Average Temperature: {sol.averageTemp}</p>
            </div>
        })

        return (
            <div className="home">
                {cardsList}
            </div>
        )
    }
}