import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import About from './Pages/About';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
