import styles from './TShirts.module.css'
import { productsTShirts } from '../../../products'
import ShopItem from '../../Shop/ShopItem'

const TShirts = () => {
  return (
    <section className={styles.TShirts}>

            <h1>Футболки</h1>
        <div className={styles.TShirtsContainer}>
            {productsTShirts.map((product) => {
                return <ShopItem data={product}></ShopItem>
            })}
        </div>
    </section>
)
}

export default TShirts