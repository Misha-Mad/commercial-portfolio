import './Header.css';
import VkIcon from '../Icons/VK';
import Instagram from '../Icons/Instagram';

function Header() {

    return (
        <header className='header'>
            <div className='header__ellipse'/>
            <div className='header__links'>
                <div className='header__border header__border_top'/>
                <a target='_blank' className='header__link' title='Instagram'
                   href='https://www.instagram.com/saved_frame/'>
                    <Instagram/>
                </a>
                <a target='_blank' className='header__link' title='VK' href='https://vk.com/taiger13'>
                    <VkIcon/>
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