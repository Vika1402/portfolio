import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js'
import About from './pages/About.js'

function App() {
  return (
    <Routes>
   
    
      <Route path='/'element={<Home/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/'element={<Home/>}/>
      <Route path='/'element={<Home/>}/>
      <Route path='/'element={<Home/>}/>
    </Routes>
  );
}

export default App;
