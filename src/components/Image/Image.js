import './Image.css'


function Header() {

    return (
        <section className='image'>
            <h2 className='image__title'>имиджевая съемка</h2>
            <div className='image__content'>
                <iframe width="480"
                        height="360"
                        src="https://www.youtube.com/embed/xFa2_PVMeDQ"
                        frameBorder="0"
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

export default Header;