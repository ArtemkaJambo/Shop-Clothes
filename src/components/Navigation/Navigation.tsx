import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import styles from './Navigation.module.css'

const Navigation = ({className}: any) => {
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        setActiveLink(location.pathname);
      }, [location]);

  return (
        <div className={className}>
            <Link to='/privacy-policy' className={activeLink === '/privacy-policy' ? `${styles.active}` : ''}>
            <p>Політика конфіденційності</p>
            </Link>
            <Link to='/public-offer' className={activeLink === '/public-offer' ? `${styles.active}` : ''}>
                <p>Публічна оферта</p>
            </Link>
            <Link to='/oplata' className={activeLink === '/oplata' ? `${styles.active}` : ''}>
                <p>Оплата і доставка</p>
            </Link>
            <Link to='/exchange' className={activeLink === '/exchange' ? `${styles.active}` : ''}>
                <p>Обмін та повернення</p>
            </Link>
            <Link to='/care' className={activeLink === '/care' ? `${styles.active}` : ''}>
                <p>Догляд за речами</p>
            </Link>

        </div>
  )
}

export default Navigation