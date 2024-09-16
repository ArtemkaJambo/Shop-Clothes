import styles from './Outwear.module.css'
import { productOutwear } from "../../../products"
import ShopItem from "../../Shop/ShopItem"

const Outwear = () => {

  return (
    <section className={styles.outwear}>

            <h1>Верхній одяг</h1>
        <div className={styles.outwearContainer}>
             {productOutwear.map((product) => {
                    return <ShopItem data={product}></ShopItem>
                })}
        </div>
    </section>
)
}

export default Outwear