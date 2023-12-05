import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Services from './components/Services';
import Review from './components/Review';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router basename="/">
        <Navbar title='FIRDAUS PORTFOLIO'/>

          <Routes>

            <Route exact path="/" element={<><Home/><Skills/><About/><Education/><Experience/><Services/><Blog/><Contact/></>}>
            </Route>

            <Route exact path="/skills" element={<Skills/>}>
            </Route>

            <Route exact path="/about" element={<About/>}>
            </Route>

            <Route exact path="/education" element={<Education/>}>
            </Route>

            <Route exact path="/experience" element={<Experience/>}>
            </Route>

            <Route exact path="/portfolio" element={<Portfolio/>}>
            </Route>

            <Route exact path="/blog" element={<Blog/>}>
            </Route>

            <Route exact path="/services" element={<Services/>}>
            </Route>

            <Route exact path="/review" element={<Review/>}>
            </Route>

            <Route exact path="/contact" element={<Contact/>}>
            </Route>
            
          </Routes>

        <Footer/>
      </Router>
    </>
  );
}

export default App;
