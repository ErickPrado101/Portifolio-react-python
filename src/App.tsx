import Hero from './components/Hero/Hero';
import Info from './components/Readme/Readme';
import Navbar from './components/Navbar/Nav';
import Contato from './components/Contato/Contato';



const App = () => {
  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="produtos">
        <Info />
      </div>      
      <div id="contatos">
        <Contato />
      </div>
    </>
  );
}

export default App;