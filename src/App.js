import logo from './logo.svg';
import './App.css';
import Login from './login/Login';
import Register from './register/SignUp';
import Home from './home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
         
        </Routes>
      </Router>
  );
}



export default App;
