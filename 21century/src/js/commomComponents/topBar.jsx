"use strict";
import React from 'react';
import style from './topBar.scss';

var TopBar = React.createClass({
    getInitialState: function() {
        return {
            listItems: ['湖北赛区','北京赛区','北京赛区','北京赛区','北京赛区','北京赛区','北京赛区',
'北京赛区','北京赛区','北京赛区','北京赛区','北京赛区','北京赛区','北京赛区','北京赛区','北京赛区','北京赛区',
'北京赛区','北京赛区','北京赛区','北京赛区','北京赛区'],
            itemChecked: '湖北赛区',
            groupItems: ['小学低年级', '小学高年级', '初中', '高中'],
            groupChecked: '小学低年级'
        }
    },
    handleCick: function(item) {
        this.setState({ itemChecked: item });
    },

    handleGroupCick: function(item) {
        this.setState({ groupChecked: item });
    },
    renderAreaList: function(item) {
        var checked = null;
        if (item == this.state.itemChecked) {
            checked = <img className={style.imgage} src="./src/svg/a.svg"/>;
        }
        return (
            <div className={style.item} onClick={()=>this.handleCick(item)}>{item}{checked}</div>
        );
    },
    renderGroupList: function(item) {
        var checked = null;
        if (item == this.state.groupChecked) {
            checked = <img className={style.imgage} src="./src/svg/a.svg"/>;
        }
        return (
            <div className={style.item} onClick={()=>this.handleGroupCick(item)}>{item}{checked}</div>
        );
    },

    render() {

        var areaItems = this.state.listItems.map(function(item) {
                return this.renderAreaList(item);
            },
            this);
        var groupItems = this.state.groupItems.map(function(item) {
                return this.renderGroupList(item);
            },
            this);
        return (
            <div>
                <div className={style.fontStyle}>赛区</div>
                <div className={style.areaItems}>{areaItems}</div>
                <div className={style.fontStyle}>组别</div>
                <div className={style.areaItems}>{groupItems}</div>
                <div className={style.fontStyle}>我可以打分的选手</div>
            </div>
        );
    }
});

module.exports = TopBar;
