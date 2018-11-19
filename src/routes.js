import React from 'react';
import { Route} from 'react-router';
import App from './App';
//import Home from './components/home';
import About from './components/about';

export default (
    <Route path="/" component={App}>
        
        <Route path="about" component={About} />
    </Route>
    );