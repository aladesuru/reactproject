import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/About';
import Content from './components/Content';

const App = () => {
  return(
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Route exact path="/" component={ Content }/>
        <Route path="/components/About" component={ About } />
      </div>
    </BrowserRouter>
    );
}

export default App;
