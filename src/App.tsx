import './App.css'
import NavBar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { Routes, Route } from 'react-router';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    document.title = 'Surenia IT'
  });
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} Component={Home} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;

