import React, { Component } from 'react';
import TitleRandom from './TitleRandom';

export default class Title extends Component{
    render(){
        return (
            <TitleRandom value={this.props.children}></TitleRandom>
        );
    }
}