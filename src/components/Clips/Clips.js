import './Clips.css';
import ArrowLeft from '../../images/arrow-left.svg';
import ArrowRight from '../../images/arrow-right.svg';

function Clips() {

    return (
        <section className='image'>
            <div className='image__ellipse_orange'/>
            <div className='image__ellipse_pink'/>
            <div className='image__head'>
                <button className='image__button'>
                    <img className='image__arrow' src={ArrowLeft} alt="dfgh"/>
                </button>
                <h2 className='image__title'>Клипы</h2>
                <button className='image__button'>
                    <img className='image-arrow' src={ArrowRight} alt="sfg"/>
                </button>
            </div>
            <div className='image__content'>
                <iframe width="560"
                        height="315"
                        src="https://www.youtube.com/embed/pZYagxwMhaw"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                />
                <div className='image__description'>
                    <p className='image__subtitle'>Название:</p>
                    <p className='image__name'>Chiquitita ABBA (New Year cover)</p>
                    <p className='image__subtitle'>Цель проекта:</p>
                    <p className='image__text'>
                        Наша цель с группой Chiquitita ABBA была создать новоднее настроение.
                    </p>
                    <p className='image__subtitle'>Результат:</p>
                    <p className='image__text'>
                        Заказчику клип очень понравился.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Clips;