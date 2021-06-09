import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Content from './components/Content/Content';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';


function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Content/>
      <Features/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
