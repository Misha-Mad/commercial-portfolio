
import ArrowLeft from '../../images/arrow-left.svg';
import ArrowRight from '../../images/arrow-right.svg';

function Photos() {

    return (
        <section className='image'>
            <div className='image__head'>
                <button className='image__button'>
                    <img className='image__arrow' src={ArrowLeft} alt="dfgh"/>
                </button>
                <h2 className='image__title'>фотосъёмки</h2>
                <button className='image__button'>
                    <img className='image-arrow' src={ArrowRight} alt="sfg"/>
                </button>
            </div>
        </section>
    )
}

export default Photos;