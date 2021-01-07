import './style.css';
import {ReactComponent as YoutubeIcon } from './youtube.svg';
import {ReactComponent as LinkeinIcon } from './linkedin.svg';
import {ReactComponent as InstagramIcon } from './instagram.svg';

function Footer(){
    return (
        <footer className="main-footer">
            App desenvolvimento durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://youtube.com/c/DevSuperior" target="_new">
                    <YoutubeIcon />
                </a>
                <a href="https://www.linkedin.com/school/devsuperior/">
                    <LinkeinIcon />
                </a>
                <a href="https://www.instagram.com/devsuperior.ig/">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;