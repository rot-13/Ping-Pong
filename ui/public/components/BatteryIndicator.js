/**
 * @jsx React.DOM
 */
'use strict';



var
    React = require('react'),
    config = window.config;



var BatteryIndicator = module.exports = React.createClass({



    getInitialState: function() {
        return {};
    },



    componentDidMount: function() {
    },
    
    
    
    reset: function() {
        this.replaceState(this.getInitialState());
    },
    
    
    
    render: function() {
        return <div className="battery-indicator">%{this.props.level == null ? '??' : this.props.level}</div>;   
    }
    

    
});