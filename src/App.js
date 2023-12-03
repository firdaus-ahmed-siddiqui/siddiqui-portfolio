import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Services from './components/Services';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




function App() {
  return (
    <>
    <Router basename="/firdaus-ahmed-siddiqui">
        <Navbar title='FIRDAUS PORTFOLIO'/>
          <Routes>

            <Route exact path="/" element={<Home/>}>
            </Route>

            <Route exact path="/about" element={<About/>}>
            </Route>

            <Route exact path="/experience" element={<Experience/>}>
            </Route>

            <Route exact path="/portfolio" element={<Portfolio/>}>
            </Route>

            <Route exact path="/blog" element={<Blog/>}>
            </Route>

            <Route exact path="/services" element={<Services/>}>
            </Route>
            
          </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
