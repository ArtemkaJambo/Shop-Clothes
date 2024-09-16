import Navigation from '../../Navigation/Navigation'
import styles from './Exchange.module.css'

const Exchange = () => {
  return (
    <section className={styles.exchange}>
        <Navigation className={styles.navigation}></Navigation>
        
        <div className={styles.acticles}>
          <h1>Обмін та повернення</h1>
            <article className={styles.firstStatement}>
                <p>Протягом 14 днів після отримання товару, ви можете повернути чи обміняти його на інший.</p>
                <p>Для оформлення обміну чи повернення потрібно зателефонувати нашому менеджеру за номером: +380 96 000 00 00 і в телефонному режимі вам зможуть допомогти.</p>
                <p>Доставка оплачується покупцем, у разі повернення або обміну товару.</p>
                <p>Повернення коштів відбувається протягом 1-4 робочих днів після отримання товару.</p>
                <p>У разі виявлення браку виробництва, доставку оплачує DMSH.</p>
            </article>
            <article className={styles.secondStatement}>
                <ul>
                    <h4>Умови повернення/обміну:</h4>
                    <li className={styles.saveConditions}>- відсутність ознак використання товару;</li>
                    <li className={styles.saveConditions}>- наявність бірок;</li>
                    <li className={styles.saveConditions}>- товар повинен мати товарний вигляд.</li>
                </ul>
                <strong>У разі виявлення ознак використання товару, компанія DMSH залишає за собою право відмовити в поверненні.</strong>
            </article>
        </div>
    </section>
)
}

export default Exchange