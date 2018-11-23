import React from 'react';
//import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './components/about';
import Home from './components/home';
import NavComponent from './components/NavComponent';
import { Provider } from 'react-redux';
import configureStore from './Store/configureStore';


const store = configureStore();

const Users = () => <h2>Users</h2>;

const App = () => (
    
    <div>
    <Provider store={store}>
    <Router>
        <div>
        <NavComponent />
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} /> 
            
        </div>
    </Router>

    </Provider>  
    </div>
    
);


export default App;