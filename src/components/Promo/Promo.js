import './Promo.css';
import ArrowLeft from '../../images/arrow-left.svg';
import ArrowRight from '../../images/arrow-right.svg';

function Promo() {

    return (
        <section className='image'>
            <div className='image__head'>
                <button className='image__button'>
                    <img className='image__arrow' src={ArrowLeft} alt="dfgh"/>
                </button>
                <h2 className='image__title'>промо съемка</h2>
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
                    <p className='image__name'>Extra sport</p>
                    <p className='image__subtitle'>Цель проекта:</p>
                    <p className='image__text'>
                        Этот ролик снимался для сетевого фитнес центра.
                        Главная цель видео продемонстрировать арсенал и возможности зала.
                    </p>
                    <p className='image__subtitle'>Результат:</p>
                    <p className='image__text'>
                        Ролик был выложен на главной странице  сайта фитнес центра.
                        За 1 минуту ролика мы максимально эффектно раскрыли преимущества спортивного зала.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Promo;