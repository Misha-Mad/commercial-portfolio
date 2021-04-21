import './Photos.css';
import LeftArrow from '../Icons/LeftArrow';
import RightArrow from '../Icons/RightArrow';

function Photos({ data, currentDataIndex, onLeftArrowButtonHandler, onRightArrowButtonHandler}) {

    function leftHandlerButton() {
        onLeftArrowButtonHandler();
    }

    function rightHandlerButton() {
        onRightArrowButtonHandler();
    }

    return (
        <section className='image'>
            <div className='content__head'>
                <button onClick={leftHandlerButton} className='content__button content__button_hidden'>
                    <LeftArrow/>
                </button>
                <h2 className='content__title'>фотосъёмки</h2>
                <button onClick={rightHandlerButton} className='content__button'>
                    <RightArrow/>
                </button>
            </div>
            <div className="image__grid">
                <img className="image__grid-item" src={data[currentDataIndex].firstImg} alt=""/>
                <img className="image__grid-item" src={data[currentDataIndex].secondImg} alt=""/>
                <img className="image__grid-item" src={data[currentDataIndex].thirdImg} alt=""/>
                <img className="image__grid-item" src={data[currentDataIndex].fourthImg} alt=""/>
                <img className="image__grid-item" src={data[currentDataIndex].fifthImg} alt=""/>
                <img className="image__grid-item" src={data[currentDataIndex].sixthImg} alt=""/>
            </div>
        </section>
    )
}

export default Photos;