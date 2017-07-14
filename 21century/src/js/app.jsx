"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/test.scss';
import style from '../css/color.css';
import * as util from './utils.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TeacherHome from './teacher/index.jsx';
import appCss from './app.scss';

const App = React.createClass({
    render() {
        return (
            <div className={appCss.container}>
                {this.props.children}
            </div>
        );
    }
});

var About = React.createClass({
    render() {
        return <h3>About</h3>
    }
});

var Admin = React.createClass({
    render() {
        return <h3>admin</h3>
    }
});
ReactDOM.render(
    <Router>
        <App>
            <Route exact path='/' component={TeacherHome}> </Route>
            <Route path='/teacher' component={TeacherHome}> </Route>
            <Route path='/admin' component={About}> </Route>
        </App>
    </Router>
, document.getElementById('app'));