import './App.css';
import Header from '../Header/Header';
import Image from '../Image/Image';
import Promo from '../Promo/Promo';
import Clips from '../Clips/Clips';
import About from '../About/About';

function App() {


  return (
    <div className="app">
      <Header/>
      <Image/>
      <Promo/>
      <Clips/>
      <About/>
    </div>
  );
}

export default App;
