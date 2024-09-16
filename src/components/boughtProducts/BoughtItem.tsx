import styles from './BoughtProducts.module.css'
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

const BoughtItem = (props: ShopItemProps)  => {

  const context = useContext(ShopContext);

    if (!context) {
        throw new Error('You have a mistake')
      }

    const { cartItems, addToCart, removeFromCart, upDateItems} = context


    const {id ,name, img, price} = props.data

  return (
    <div className={styles.item}>
        <img src={img} alt="" />
        
        <div className={styles.description}>
            <strong className={styles.nameItem}>{name}</strong>
            <p>₴{price}</p>
            <div className={styles.items}>
              <button onClick={() => removeFromCart(id)} >-</button>
              <input type="number" value={cartItems[id]} onChange={(e) => upDateItems(Number(e.target.value), id)} />
              <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}

export default BoughtItem