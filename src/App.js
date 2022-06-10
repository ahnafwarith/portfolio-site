import { Route, Routes } from 'react-router-dom';
import './App.css';
import Me from './Pages/About/Me';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<Me></Me>}></Route>
      </Routes>
    </>
  );
}

export default App;
