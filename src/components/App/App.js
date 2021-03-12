import './App.css';
import Header from '../Header/Header';
import Image from '../Image/Image';
import Promo from '../Promo/Promo';
import Clips from '../Clips/Clips';
import Photos from '../Photos/Photos';
import About from '../About/About';

function App() {


  return (
    <div className="app">
      <Header/>
      <Image/>
      <Promo/>
      <Clips/>
      <Photos/>
      <About/>
    </div>
  );
}

export default App;
