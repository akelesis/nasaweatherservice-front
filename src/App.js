import React from 'react';
import './App.css';

import {BrowserRouter} from 'react-router-dom'

import Header from './templates/Header.jsx'
import Routes from './Routes'
import Footer from './templates/Footer'

export default props => 
    <BrowserRouter>
        <div className="app">
            <Header />
            <Routes />
            <Footer/>
        </div>
    </BrowserRouter>