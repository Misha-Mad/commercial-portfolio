import './App.css';
import {useState} from 'react';
import Header from '../Header/Header';
import Photos from '../Photos/Photos';
import About from '../About/About';
import Content from '../Content/Content';
import {IMG_DATA, PROMO_DATA, CLIPS_DATA} from '../../Utils/data';



function App() {

    const [currentImgData, setCurrentImgData] = useState(IMG_DATA[0]);
    const [currentPromoData, setCurrentPromoData] = useState(PROMO_DATA[0]);
    const [currentClipsData, setCurrentClipsData] = useState(CLIPS_DATA[0]);

    function handlerLeftArrowImage() {

    }

    function handlerRightArrowImage() {

    }


    function handlerLeftArrowImage() {

    }

    function handlerRightArrowImage() {

    }

  return (
    <div className="app">
      <Header/>
      <Content
          title='имиджевая съёмка'
          currentData={currentImgData}
          arrowButtons={true}
      />
      <Content
          title='промо съёмка'
          currentData={currentPromoData}
          ellipses='promo'
          arrowButtons={false}
      />
      <Content
          title='клипы'
          currentData={currentClipsData}
          ellipses='clips'
          arrowButtons={true}
      />
      <Photos/>
      <About/>
    </div>
  );
}

export default App;
