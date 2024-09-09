// src/App.jsx
import Header from './components/Header.jsx';
import Intro from './components/Intro';
import Services from './components/Services';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-serif text-gray-800 bg-white">
      <Header />
      <Intro />
      <Services />
      <About />
      <Work />
      <Footer />
    </div>
  );
}

export default App;

