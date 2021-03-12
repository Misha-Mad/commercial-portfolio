import './About.css';
import Portrait from '../../images/portret.png';

function About() {

    return (
        <section className='about'>
            <div className='about__ellipse_blue'/>
            <div className='about__ellipse_orange'/>
            <h2 className='about__title'>О себе</h2>
            <div className='about__content'>
                <img className='about__image' src={Portrait} alt='портрет'/>
                <div className='about__description'>
                    <p className='about__text'>
                        Меня зовут Богдан Гордейчук. Я оператор-постановщик и фотограф.
                        Более 5 лет занимаюсь фотографией и видеосъемкой в городе Санкт-Петербург.
                    </p>
                    <p className='about__subtitle'>
                        Образование:
                    </p>
                    <p className='about__text'>
                        Я окончил Институт Кино и Телевидения в Санкт-Петербурге.
                        Имею опыт съемки как в команде в качестве оператора,
                        так и самостоятельной работы от этапа создания проекта до финального монтажа и работы с графикой.
                    </p>
                    <p className='about__subtitle'>
                        Опыт:
                    </p>
                    <p className='about__text'>
                        Была многократная практика работы с арендными кинокамерами и сопутствующим комплектом оборудования,
                        а также имеется собственный набор съемочной техники, это электронный стабилизатор DJI Ronin S,
                        радиооборудование Rode для качественной записи звука,
                        дополнительные портативные источники света с высоким качеством цветопередачи,
                        и беззеркальная камера,
                        позволяющая выдавать исходный материал в 4К 60Fps и глубиной цвета в 10bit.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;