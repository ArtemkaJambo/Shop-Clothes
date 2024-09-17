import styles from './BoughtProducts.module.css'
import { productOutwear, productsHoody, productsTShirts, productsTrousers } from "../../products"
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import BoughtItem from './BoughtItem';
import { Link } from 'react-router-dom';

const allProducts = [...productsHoody, ...productsTShirts, ...productsTrousers, ...productOutwear]


const BoughtProducts = () => {
    const context = useContext(ShopContext);

    
    if (!context) {
        throw new Error('You have a mistake')
      }

    const { cartItems } = context


    function getTotalAmount() {
      let totalAmount = 0
      for (let item in cartItems) {
        if (cartItems[item] !== 0) {
          let findItem = allProducts.find((product) => product.id === Number(item))
          if (findItem) {
             totalAmount += cartItems[item] * findItem.price
          }
        }
      }
      return totalAmount
    }


    const totalAmount = getTotalAmount()

  return (
        <section className={styles.boughtSection}>

            {totalAmount > 0 ? <h1>Товари у кошику</h1> : <h1>Кошик пустий</h1>}

            <div className={styles.itemsContainer}>
                {allProducts.map((product,index) => {
                        if (cartItems[product.id] !== 0) {
                          return <BoughtItem key={index} data={product}></BoughtItem>
                        }
                })}
            </div>

            <Link to='/'>
             <button className={styles.goToMain}>На головну</button>
            </Link>

            {totalAmount > 0 ? 
                    <h2 className={styles.totalAmount}>Загальна сумма: ₴{totalAmount}</h2>
            : <></>}
            

        </section>
    )
}

export default BoughtProducts