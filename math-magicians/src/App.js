import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator'
import Navbar from './components/Navbar';
import Quote from './components/Quote';
import Home from './components/Home'
import {BrowserRouter,Routes,Route}from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>

      <Route path='/calculator' element={<Calculator/>}></Route>
      <Route path='/quote' element={<Quote/>}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
