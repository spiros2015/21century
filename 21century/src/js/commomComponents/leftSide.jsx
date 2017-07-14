"use strict";
import React from 'react';
import LeftSideCss from './leftSide.scss'

var LeftSide = React.createClass({
    
    getInitialState: function() {
        return {
            selectedItem: 'aaa'
    }  
    },
    
    itemSelect: function(item) {
        this.setState({selectedItem:item});
    },

    renderItem: function(item) {
        var style = LeftSideCss.itemWrapper;
        if (item == this.state.selectedItem) {
            console.log('aaaa');
            style = style + ' ' + LeftSideCss.itemSelected;
        }
        return <div className={style} onClick={()=>this.itemSelect(item)}>
                    {item}
               </div>;
    } ,
    render() {
        var items = ['aaa', 'vvv'];
        var itemList = items.map(function(item, id) {
               return  this.renderItem(item);
            },
            this);
        return (        
            <div className={LeftSideCss.container}>
                <div className={LeftSideCss.iconDiv}>dad</div>
                <div className={LeftSideCss.managerDiv}>
                    <div className={LeftSideCss.blueBar}></div>
                    <p className={LeftSideCss.managerFont}>教师管理</p>    
                </div>
                <div className={LeftSideCss.selectDiv}>{itemList}</div>
                <div className={LeftSideCss.bottomDiv}>
                    <pre className={LeftSideCss.bottomFontStyle}>欢迎您  教师123</pre>
                    <a href="fdaf" className={LeftSideCss.aCSS}>退出</a>
                </div>
            </div>
        );
    }
});

module.exports = LeftSide;