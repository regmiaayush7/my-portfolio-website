import Home from './components/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Code from './components/Code';
import { useContext } from "react";
import { ThemeStore } from './components/ThemeContext';

function App() {
  const [theme, setTheme] = useContext(ThemeStore)
  return (
    <div className={theme ? 'dark-theme': 'light-theme'}>
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
