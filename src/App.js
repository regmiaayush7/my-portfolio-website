import Home from './components/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Code from './components/Code';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
        <Switch>
            <Route exact path ='/' component={Home}/>
            <Route exact path ='/projects' component={Projects}/>
            <Route exact path ='/code' component={Code}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
