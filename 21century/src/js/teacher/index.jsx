"use strict";
import React from 'react';
import LeftSide from '../commomComponents/leftSide.jsx';
import indexCss from './index.scss'

var TeacherHome = React.createClass({
    render() {
        return (
            <div className={indexCss.container}>
                <div className={indexCss.innercontainer}>
                    <LeftSide/>
                    <div className={indexCss.rightContainer}></div>
                </div>
            </div>
        );
    }
});

module.exports = TeacherHome;