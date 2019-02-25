import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Blog from './blog/Blog';
import MenuRota from './components/menu/MenuRota';
import Curriculo from './curriculo/Curriculo';

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="Logo"></div>
        <MenuRota>
          {/* <Route exact path="/" component={Sobre} />
          <Route path="/sobre" component={Sobre} /> */}
          <Route exact path="/" component={Blog} />
          <Route path="/blog" name="Blog" component={Blog} />
          <Route path="/curriculo" name="Quem Somos!" component={Curriculo} />
        </MenuRota>
      </div>
    );
  }

}