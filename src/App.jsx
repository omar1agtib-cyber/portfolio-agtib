import Hero from './components/b-hero/Hero';
import Header from './components/a-header/Header';
import Main from './components/c-main/Main';
import Contact from './components/d-contact/Contact';
import Footer from './components/e-footer/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="divider" />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
    </div>
  );
}

export default App;
