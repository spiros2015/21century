"use strict";
import React from 'react';
import LeftSide from '../commomComponents/leftSide.jsx';
import indexCss from './index.scss'
import TopBar from '../commomComponents/TopBar.jsx';
import ItemList from '../commomComponents/itemList.jsx';


var TeacherHome = React.createClass({
    render() {
        return (
            <div className={indexCss.container}>
                <div className={indexCss.innercontainer}>
                    <LeftSide/>
                    <div className={indexCss.rightContainer}>
                        <TopBar/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TeacherHome;