import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './components/NavBar/Header/Navbar';
import Footer from './components/NavBar/Footer/Footer';
import Home from './components/pages/Home/Home';
import Service from './components/pages/Service/Service';
import Portfolio from './components/pages/Portfolio/Portfolio';
import AudioGears from './components/pages/AudioGears/AudioGears';

import './components/assets/css/bootstrap.min.css';
import './components/assets/css/style.css';


function App() {
  return (
    <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/service" component={Service}></Route>
                    <Route path="/portfolio" component={Portfolio}></Route>
                    <Route path="/audiogears" component={AudioGears}></Route>

                </Switch>
                <Footer />
            </Router>
    </div>
  );
}

export default App;
