import './App.css';
import Dashboard from './Components/dashboard';
import Landingpage from './Components/landingpage';
import Login from './Components/login';
import Navbar from './Components/navbar';
import Register from './Components/register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Landingpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;