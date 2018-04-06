import React from 'react';
import { HashRouter , Route  } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/About';
import Content from './components/Content';
import Sourcecode from './components/SourceCode';

const App = () => {
  return(
    <HashRouter>
      <div className="App">
        <Navigation />
        <Route exact path="/" component={ Content }/>
        <Route  path="/components/About" component={ About } />
        <Route path="/components/SourceCode" component={ Sourcecode } />
      </div>
    </HashRouter>
    );
}

export default App;
