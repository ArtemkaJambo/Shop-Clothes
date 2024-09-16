import styles from './Header.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faPerson, faHippo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import outwearIcon from '../../assets/images/icons/outwear.webp'
import hoodyIcon from '../../assets/images/icons/hoody.webp'
import TShirtIcon from '../../assets/images/icons/TShirt.webp'
import TrousersIcon from '../../assets/images/icons/Trousers.webp'
import Modal from '../Modal/Modal'

const Header = () => {
  const [modal, setModal] = useState(false);

  return (
    <header className={styles.header}>
      <Link to='/'>
      <div className={styles.icons}>
          <FontAwesomeIcon className={styles.hippo} icon={faHippo} />
            <h1>DMSH</h1>
      </div>
      </Link>
        <ul className={styles.headerList}>  
            <li className={styles.catalog}>
              
              Каталог товарів
              <ul className={styles.catalogClothes}>
                <Link to='/outwear'>
                  <li><img src={outwearIcon} alt="" />Верхній одяг</li>
                </Link>
                <Link to='/hoody'>
                  <li><img src={hoodyIcon} alt="" />Худі/Світшоти</li>
                </Link>
                <Link to='/T-Shirts'>
                  <li><img src={TShirtIcon} alt="" />Футболки</li>
                </Link>
                <Link to='/trousers'>
                  <li><img src={TrousersIcon} alt="" />Штани</li>
                </Link>
                </ul>              
              </li> 
              <FontAwesomeIcon onClick={() => setModal(true)} className={styles.icon} icon={faPerson} />
            <Modal  modal={modal} setModal={setModal}>

            </Modal>

            <Link to='/boughtgoods'>
              <FontAwesomeIcon className={styles.icon} icon={faBasketShopping} />
            </Link>
        </ul>
    </header>
  )
}

export default Header