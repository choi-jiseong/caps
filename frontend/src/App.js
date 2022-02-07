import React from 'react'
import {BrowserRouter as Router ,Navigate,Route,Routes} from 'react-router-dom';
import MasterLayout from './layouts/MasterLayout';
import Login from './components/Login';
import Register from './components/Register';
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
          <Routes>
          <Route exact path='/' element={<MasterLayout/>}/>
          <Route path="/login" element={localStorage.getItem("auth_token") ? <Navigate to="/" /> : <Login/>}></Route>
          <Route path="/register" element={localStorage.getItem("auth_token") ? <Navigate to="/" /> : <Register/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
