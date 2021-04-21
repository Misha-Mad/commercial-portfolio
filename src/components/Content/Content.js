import './Content.css';
import LeftArrow from '../Icons/LeftArrow';
import RightArrow from '../Icons/RightArrow';

function Content({
                     title,
                     data,
                     currentDataIndex,
                     ellipses,
                     arrowButtons,
                     onLeftArrowButtonHandler,
                     onRightArrowButtonHandler
                 }) {

    const intFrameWidth = window.innerWidth;
    console.log(intFrameWidth)

    function leftHandlerButton() {
        onLeftArrowButtonHandler();
    }

    function rightHandlerButton() {
        onRightArrowButtonHandler();
    }

    return (
        <section className='content'>
            {ellipses === 'promo' ?
                <>
                    <div className='content__ellipse'/>
                    <div className='content__ellipse_small'/>
                </>
                : ellipses === 'clips' ?
                    <>
                        <div className='content__ellipse_orange'/>
                        <div className='content__ellipse_pink'/>
                    </>
                    : <></>}
            <div className='content__head'>
                {arrowButtons && <button onClick={leftHandlerButton} className='content__button content__button_hidden'>
                    <LeftArrow/>
                </button>}
                <h2 className='content__title'>{title}</h2>
                {arrowButtons && <button onClick={rightHandlerButton} className='content__button'>
                    <RightArrow/>
                </button>}
            </div>
            <div className='content__content'>
                <iframe className='content__video'
                        width="560"
                        height="315"
                        src={data[currentDataIndex].videoSrc}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                />
                <div className='content__description'>
                    <p className='content__subtitle'>Название:</p>
                    <p className='content__name'>{data[currentDataIndex].name}</p>
                    <p className='content__subtitle'>Цель проекта:</p>
                    <p className='content__text'>
                        {data[currentDataIndex].target}
                    </p>
                    <p className='content__subtitle'>Результат:</p>
                    <p className='content__text'>
                        {data[currentDataIndex].result}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Content;