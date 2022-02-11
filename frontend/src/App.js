import React from 'react'
import {BrowserRouter as Router ,Link,Route,Switch} from 'react-router-dom';
import MasterLayout from './layouts/MasterLayout';
import Login from './components/Login';
import Register from './components/Register';
import Chat from './components/Chat/Chat';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8000/"
axios.defaults.headers.post["Content-Type"] = 'application/json'
axios.defaults.headers.post["Accept"] = 'application/json'
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});
function App() {
  const token=localStorage.getItem("auth_token");
  return (
    <div className="App">
        <Router>
          <Switch>
          <Route exact path='/' >{<MasterLayout/>}</Route>
          <Route path="/login" >{localStorage.getItem("auth_token") ? <Link to="/" /> : <Login/>}</Route>
          <Route path="/register" >{localStorage.getItem("auth_token") ? <Link to="/" /> : <Register/>}</Route>
          <Route path="/chat" >{localStorage.getItem("auth_token") ? <Chat/> : <Link to="/login" />}</Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
