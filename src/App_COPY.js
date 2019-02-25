import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Inicio from './inicio/Inicio';
import Projetos from './projetos/Projeto';
import Curriculo from './curriculo/Curriculo';
import Blog from './blog/Blog';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand">LOGO</a>
              <button class="navbar-toggler" type="button" 
                data-toggle="collapse" data-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" 
                aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <nav class="collapse navbar-collapse navbar-right" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item"><Link to="/" class="nav-link">Início</Link></li>
                  <li class="nav-item current"><Link to="/blog" class="nav-link">Blog</Link></li>
                  <li class="nav-item"><Link to="/projetos" class="nav-link">Projetos</Link></li>
                  <li class="nav-item"><Link to="/curriculo" class="nav-link">Mini currículo</Link></li>
                </ul>
              </nav>
            </nav>
            <Switch>
            <Route exact path="/" component={startPage} />
            <Route path="/blog" component={blogPage} />
            <Route path="/projetos" component={projectsPage} />
            <Route path="/curriculo" component={curriculumPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }

}

function startPage(){
  return <Inicio></Inicio>;
}

function blogPage(){
  return <Blog></Blog>;
}

function projectsPage(){
  return <Projetos></Projetos>;
}

function curriculumPage(){
  return <Curriculo></Curriculo>;
}

export default App;
