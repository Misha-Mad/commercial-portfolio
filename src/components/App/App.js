import './App.css';
import {useState} from 'react';
import Header from '../Header/Header';
import Photos from '../Photos/Photos';
import About from '../About/About';
import Content from '../Content/Content';
import {IMG_DATA, PROMO_DATA, CLIPS_DATA} from '../../Utils/data';



function App() {

    const [currentImgDataIndex, setCurrentImgDataIndex] = useState(0);
    const [currentPromoDataIndex, setCurrentPromoDataIndex] = useState(0);
    const [currentClipsDataIndex, setCurrentClipsDataIndex] = useState(0);

    function handlerLeftArrowImage() {
        if(currentImgDataIndex !== 0) {
            setCurrentImgDataIndex(currentImgDataIndex - 1);
        } else {
            setCurrentImgDataIndex(IMG_DATA.length - 1);
        }
    }

    function handlerRightArrowImage() {
        if(currentImgDataIndex !== IMG_DATA.length - 1) {
            setCurrentImgDataIndex(currentImgDataIndex + 1);
        } else {
            setCurrentImgDataIndex(0);
        }
    }

    function handlerLeftArrowClips() {
        if(currentClipsDataIndex !== 0) {
            setCurrentClipsDataIndex(currentClipsDataIndex - 1);
        } else {
            setCurrentClipsDataIndex(CLIPS_DATA.length - 1);
        }
    }

    function handlerRightArrowClips() {
        if(currentClipsDataIndex !== CLIPS_DATA.length - 1) {
            setCurrentClipsDataIndex(currentClipsDataIndex + 1);
        } else {
            setCurrentClipsDataIndex(0);
        }
    }

  return (
    <div className="app">
      <Header/>
      <Content
          title='имиджевая съёмка'
          data={IMG_DATA}
          currentDataIndex={currentImgDataIndex}
          arrowButtons={true}
          onLeftArrowButtonHandler={handlerLeftArrowImage}
          onRightArrowButtonHandler={handlerRightArrowImage}
      />
      <Content
          title='промо съёмка'
          data={PROMO_DATA}
          currentDataIndex={currentPromoDataIndex}
          ellipses='promo'
          arrowButtons={false}
      />
      <Content
          title='клипы'
          data={CLIPS_DATA}
          currentDataIndex={currentClipsDataIndex}
          ellipses='clips'
          arrowButtons={true}
          onLeftArrowButtonHandler={handlerLeftArrowClips}
          onRightArrowButtonHandler={handlerRightArrowClips}
      />
      <Photos/>
      <About/>
    </div>
  );
}

export default App;
