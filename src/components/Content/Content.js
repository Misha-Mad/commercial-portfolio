import './Content.css';
import ArrowLeft from '../../images/arrow-left.svg';
import ArrowRight from '../../images/arrow-right.svg';

function Content({title, currentData, ellipses, arrowButtons, leftArrowButtonHandler, rightArrowButtonHandler}) {

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
                {arrowButtons && <button className='content__button'>
                    <img className='content__arrow' src={ArrowLeft} alt="arrow"/>
                </button>}
                <h2 className='content__title'>{title}</h2>
                {arrowButtons && <button className='content__button'>
                    <img className='content-arrow' src={ArrowRight} alt="arrow"/>
                </button>}
            </div>
            <div className='content__content'>
                <iframe width="560"
                        height="315"
                        src={currentData.videoSrc}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                />
                <div className='content__description'>
                    <p className='content__subtitle'>Название:</p>
                    <p className='content__name'>{currentData.name}</p>
                    <p className='content__subtitle'>Цель проекта:</p>
                    <p className='content__text'>
                        {currentData.target}
                    </p>
                    <p className='content__subtitle'>Результат:</p>
                    <p className='content__text'>
                        {currentData.result}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Content;