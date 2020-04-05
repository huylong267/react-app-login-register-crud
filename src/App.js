import React, { Component } from 'react';
import './App.css';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Employee from './components/employee';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      employees :[
        {
            id:1,
            name:'Long',
            phone:'123456',
            email:'h@gmail.com',
            empId:'123',
            company:'VNPT',
            location:'HN'
        },
        {
            id:2,
            name:'Long',
            phone:'123456',
            email:'h@gmail.com',
            empId:'123',
            company:'VNPT',
            location:'HN'
        },
        {
            id:3,
            name:'Long',
            phone:'123456',
            email:'h@gmail.com',
            empId:'123',
            company:'VNPT',
            location:'HN'
        },
        {
            id:4,
            name:'Long',
            phone:'123456',
            email:'h@gmail.com',
            empId:'123',
            company:'VNPT',
            location:'HN'
        }
    ]
    }
  }
  componentDidMount(){
    localStorage.setItem('listEmp',JSON.stringify(this.state.employees));
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route path="/index" component={Employee}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;