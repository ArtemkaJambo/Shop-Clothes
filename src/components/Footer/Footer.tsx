import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <nav className={styles.nav}>
            <ul>
                <Link to='/privacy-policy'>
                    <li>Політика конфіденційності</li>
                </Link>
                <Link to='/public-offer'>
                    <li>Публічна оферта</li>
                </Link>
            </ul>
            <ul>
                <Link to='/oplata'>
                    <li>Оплата і доставка</li>
                </Link>
                <Link to='/exchange'>
                    <li>Обмін та повернення</li>
                </Link>
                <Link to='/care'>
                    <li>Догляд за речами</li>
                
                </Link>
            </ul>
            <ul>
                <li><a href="mailto:dmsh@dmsh.com.ua">dmsh@cupage.com.ua</a></li>
                <li>+38 (096) 000-00-00</li>
                <li><a href="https://t.me/primo887" target="_blank">Telegram</a></li>
            </ul>
        </nav>
    </footer>
)
}

export default Footer