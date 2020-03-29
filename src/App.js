import React,{Component} from 'react';

import './App.css';
import Login from './components/login';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom/cjs/react-router-dom';

class App extends Component {
  render() {
      return (
          <div className="App">
            <Router>
              <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route  path="/dashboard" component={Dashboard}></Route>
              </Switch>
            </Router> 
          </div>
      );
  }
}

export default App;