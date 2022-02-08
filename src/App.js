import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <div className="App">
          <Router>
              <Switch>
                <Route path='/appointment'>
                 <Appointment></Appointment>
                </Route>
                <Route exact path='/'>
                    <Home></Home>
                </Route>
                <Route path='/home'>
                    <Home></Home>
                </Route>
                <Route path='/login'>
                   <Login></Login>
                </Route>
              </Switch>
          </Router>
    </div>
  );
}

export default App;
