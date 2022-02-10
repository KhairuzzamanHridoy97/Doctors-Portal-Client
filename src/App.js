import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
// import AuthProvider from './contexts/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      {/* <AuthProvider> */}

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
                <Route path='/register'>
                   <Register></Register>
                </Route>
              </Switch>
          </Router>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
