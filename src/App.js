import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Signin from './components/auth/Signin';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar'
import  ProjectDetails  from './components/projects/ProjectDetails';
import Signup from '../src/components/auth/Signup'
import CreateProject from './components/projects/CreateProject';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails}/>
            <Route path='/signin' component={Signin}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/create' component={CreateProject}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;