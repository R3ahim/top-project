import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Home/Footer/Footer';
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Apoinment from './components/Apoinment/Apoinment';

function App() {
  return (
    <div >
     <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/> 
      <Route path='/register' element={<Register/>}/> 
      <Route path='/appointment' element={<Apoinment/>}/> 
    </Routes>

     <Footer/>
    </div>
  );
}

export default App;
