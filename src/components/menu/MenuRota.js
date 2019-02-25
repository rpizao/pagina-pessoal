import React, { Component } from 'react';
import { BrowserRouter, Link, Switch } from 'react-router-dom';
import "./menu.css";

/**
 * @author Pizão
 * @since 02/2019
 * 
 * Cria um menu de rotas com referência para as telas.
 * Para utilizar, basta informar uma lista de <Router />
 * passando path, name e component a ser acessado pelo link
 * e o menu será montado dinamicamente.
 */
export default class MenuRota extends Component{
    
    constructor(props){
        super(props);
        this.menuItemns = this.props.children.filter((item) => { return item.props.path !== "/" });
        this.elements = [];
        this.state = {
            dynamicPosition: 0,
            staticPosition: 0
        };
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <nav id="nav">
                        <ul className="menu">
                        {
                            this.menuItemns.map((item, index) => {
                                return (
                                    <li key={index} ref={el => (this.selectElement(el, index))}>
                                        <Link to={item.props.path}
                                            onMouseOver = {() => this.moveOver(this.elements[index])}
                                            onMouseOut = {() => this.moveOut(this.elements[index])}
                                            onClick = {() => this.clicked(this.elements[index])}>
                                            {(item.props.name == null ? item.props.path : item.props.name)}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        </ul>
                        <div className="barrita" style={{left: this.state.dynamicPosition}}></div>
                    </nav>
                    <div className="tab-content">
                    <Switch>
                        {this.props.children}
                    </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }

    selectElement(el, index){
        this.elements[index] = el;
    }

    moveOver(ref){
        this.setState({dynamicPosition: ref.offsetLeft});
    }

    moveOut(ref){
        this.setState({dynamicPosition: this.state.staticPosition});
    }

    clicked(ref){
        this.setState({staticPosition: ref.offsetLeft});
    }

}