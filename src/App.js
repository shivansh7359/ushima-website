import './App.css';
import About from './components/About';
import Download from './components/Download';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className=''>
      <Hero/>
      <Navbar/>
      <Features/>
      <About/>
      <Download/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
