import './Header.css'
import Instagram from '../../images/instagram.svg';
import Vk from '../../images/vk.svg';

function Header() {

    return (
        <header className='header'>
            <div className='header__eclipse'/>
            <div className='header__links'>
                <div className='header__border header__border_top'/>
                <a className='header__link' title='инстаграм' href='https://www.instagram.com/saved_frame/'>
                    <img src={Instagram} alt='sdf'/>
                </a>
                <a className='header__link' title='вконтакте' href='https://vk.com/taiger13'>
                    <img src={Vk} alt='sdf'/>
                </a>
                <div className='header__border header__border_bottom'/>
            </div>
            <div className='header__titles'>
                <h1 className='header__title'>COMMERCIAL</h1>
                <p className='header__subtitle'>PORTFOLIO</p>
            </div>
        </header>
    )
}

export default Header;