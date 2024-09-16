import { productsHoody } from "../../../products"
import ShopItem from "../../Shop/ShopItem"
import styles from './Hoody.module.css'

const Hoody = () => {
  return (
    <section className={styles.hoody}>
    
        <h1>Худі/Світшоти</h1>
            <div className={styles.hoodyContainer}>
                {productsHoody.map((product) => {
                    return <ShopItem data={product}></ShopItem>

                })}
            </div>
    </section>
)
}

export default Hoody