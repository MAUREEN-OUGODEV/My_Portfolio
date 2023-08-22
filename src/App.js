
import './App.css';
import Display from './Components/Display';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import ContactSection from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      < Navbar />
      < Display />
      <About />
      <Services />
      <Projects />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
