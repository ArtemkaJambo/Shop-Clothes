import styles from './Shop.module.css'
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';

interface ShopItemProps {
    data: {
      id: number;
      name: string;
      img: string;
      price: number;
    };
  }

const ShopItem = (props: ShopItemProps) => {

    const {id, name, img, price} = props.data

    const context = useContext(ShopContext);
    
    
    if (!context) {
      throw new Error('You have a mistake')
    }
    const {addToCart, cartItems} = context

    const totalAmount = cartItems[id]

  return (
    <div className={styles.shopItem}>
        <img className={styles.photoItem} src={img} alt="" />
        
        <div className={styles.goodDescription}>
            <strong>{name}</strong>
            <p>₴{price}</p>
            <button onClick={() => addToCart(id)}>Додати до кошику {totalAmount > 0 && `(${totalAmount})`}</button>
        </div>
        
    </div>
)
}

export default ShopItem