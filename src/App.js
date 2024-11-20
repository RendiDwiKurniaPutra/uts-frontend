import Header from './components/header';
import Navbar from './components/navbar'
import Home from './pages/home/home';
import About from './pages/about/about'
import Footer from './pages/footer/footer';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
