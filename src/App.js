import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import history from './@history';
import { createBrowserHistory } from 'history';
import Home from './components/pages/Home/Home';
import Service from './components/pages/Service/Service';
import Portfolio from './components/pages/Portfolio/Portfolio';
import AudioGears from './components/pages/AudioGears/AudioGears';
import About from './components/pages/About/About';
import Login from './components/pages/Login/Login';
import AdminDashboard from './components/pages/Admin/AdminDashboard';
import AddService from './components/pages/Admin/services/ServiceBase';

import './components/assets/css/bootstrap.min.css';
import './components/assets/css/style.css';
import React from 'react';

const loading = (
  <div className='pt-3 text-center'>
    <div className='sk-spinner sk-spinner-pulse'></div>
  </div>
)

function App() {
  const history=createBrowserHistory();
  return (
    <div className="App">
            <Router  history={history}>
               <React.Suspense fallback={loading}>             
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/service" exact component={Service}></Route>
                    <Route path="/portfolio"  exact component={Portfolio}></Route>
                    <Route path="/audiogears" exact  component={AudioGears}></Route>
                    <Route path="/aboutus" exact component={About}></Route>
                    <Route path="/login" exact component={Login}></Route>
                    <Route path="/admin/dashboard" exact component={AdminDashboard} ></Route>
                    <Route path="/admin/addservices" exact component={AddService} ></Route>
                </Switch>  
                </React.Suspense>
              </Router>
    </div>
  );
}

export default App;
