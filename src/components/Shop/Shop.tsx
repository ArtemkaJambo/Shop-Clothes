import styles from './Shop.module.css'
import { productsHoody, productsTrousers, productsTShirts, productOutwear } from '../../products.js'
import ShopItem from './ShopItem.js'

const Shop = () => {

    const allProducts = [...productsHoody, ...productsTrousers, ...productsTShirts, ...productOutwear]

  return (
    <section className={styles.shop}>
        <h1>Весь доступний товар</h1>

        <div className={styles.shopContainer}>

            {allProducts.map((product: any, index) => (
                <ShopItem key={index} data={product}></ShopItem>
            ))}

        </div>
        
    </section>    
  )
}

export default Shop
