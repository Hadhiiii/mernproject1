import { BrowserRouter as Router,Route,Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Profile from './components/Profile';

 function App(){
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
      </BrowserRouter>
     
     
  );

 } 
 export default App;

