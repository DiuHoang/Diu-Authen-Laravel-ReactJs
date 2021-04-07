import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
  from "react-router-dom";
import Login from './components/Authen/Login';
import Register from './components/Authen/Register';
import Home from './components/Authen/Home';
import Dashboard from './components/Authen/Dashboard';
import PrivateRoute from './components/Authen/PrivateRoute';
function App() {
  return (
    <Router>
      <Switch>
        {/*User might LogIn*/}
        <Route exact path="/" component={Home} />
        {/*User will LogIn*/}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* User is LoggedIn*/}
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
