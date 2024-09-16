import styles from './Trousers.module.css'
import { productsTrousers } from '../../../products'
import ShopItem from '../../Shop/ShopItem'

const Trousers = () => {
  return (
    <section className={styles.trousers}>
        
            <h1>Штани</h1>
        <div className={styles.trousersContainer}>
            {productsTrousers.map((product) => {
                return <ShopItem data={product}></ShopItem>
            })}
        </div>
    </section>
)
}

export default Trousers