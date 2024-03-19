import { React } from "react";
import LoginPage from './components/login';
import SignupPage from './components/signup';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;



