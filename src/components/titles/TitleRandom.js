import React, {Component} from 'react';

/**
 * @author Pizão
 * 
 * Classe que define, aplica e retorna uma nova formatação
 * para o título informado como parametro. 
 */
export default class TitleRandom extends Component{
    
    constructor(props){
        super(props);
        this.title = props.value;
        this.formatters = [
            BlackStartTitle,
            ItalicAndBlackStartTitle,
            ItalicAndUnderlineStartTitle
        ];
        this.selectRandomView();
    }

    render(){
        return this.view;
    }

    selectRandomView(){
        const index = this.random(this.formatters.length);
        this.view = this.formatters[index](this.title);
    }

    random = (max) => {
        return Math.floor(Math.random() * max);
    }
}

function BlackStartTitle(title){
    const array = title.split(" ");
    const first = array[0];
    return <h1><b>{first}</b> {array.slice(1)}</h1>;
}

function ItalicAndBlackStartTitle(title){
    const array = title.split(" ");
    const first = array[0];
    return <h1><i><b>{first}</b></i> {array.slice(1)}</h1>;
}

function ItalicAndUnderlineStartTitle(title){
    const array = title.split(" ");
    const first = array[0];
    return <h1><i><u>{first}</u></i> {array.slice(1)}</h1>;
}