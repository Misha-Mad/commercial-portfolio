import './Image.css';
import ArrowLeft from '../../images/arrow-left.svg';
import ArrowRight from '../../images/arrow-right.svg';

function Image() {

    return (
        <section className='image'>
            <div className='image__head'>
                <button className='image__button'>
                    <img className='image__arrow' src={ArrowLeft} alt="dfgh"/>
                </button>
                <h2 className='image__title'>имиджевая съемка</h2>
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
                    <p className='image__name'>Салон красоты</p>
                    <p className='image__subtitle'>Цель проекта:</p>
                    <p className='image__text'>
                        Промо ролик был задуман для демонстрации профессиональных навыков мастеров салона красоты.
                    </p>
                    <p className='image__subtitle'>Результат:</p>
                    <p className='image__text'>
                        Ролик был опубликован во всех социальных сетях,
                        благодаря чему увеличился приток подписчиков и клиентов у салона красоты.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Image;