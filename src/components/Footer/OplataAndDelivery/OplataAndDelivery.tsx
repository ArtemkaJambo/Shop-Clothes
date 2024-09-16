import Navigation from '../../Navigation/Navigation'
import styles from './OplataAndDelivery.module.css'

const OplataAndDelivery = () => {
    
    return (
        <section className={styles.oplata}>
              <Navigation className={styles.navigation}></Navigation>

        <div className={styles.articles}>
        <h1>Оплата і доставка</h1>

        <article className={styles.firstStatement}>
            <h4>Доставка при повній оплаті</h4>
            <p>Доставка товару здійснюється транспортною компанією "Нова пошта".</p>
            <p>Вартість доставки залежить від фактичної ваги товару. В середньому вартість доставки від 55 грн.</p>
            <p>Після замовлення відправка здійснюється протягом 1-2 днів.</p>
            <p>Способи оплати: картою (Visa, Mastercard) онлайн через Monobank еквайринг.</p>
        </article>
        <article className={styles.secondStatement}>
            <h4>Доставка з післяоплатою</h4>
            <p>Доставка товару здійснюється транспортною компанією "Нова пошта".</p>
            <p>Доставка та комісія за пересилання коштів оплачується покупцем.</p>
            <p>Орієнтовна вартість доставки від 55 грн + 2% від вартості товару + 20 грн.</p>
            <p>Після замовлення відправка здійснюється протягом 1-2 днів.</p>
            <p>Оплата відбувається на пошті.</p>
        </article>
        </div>
    </section>
)
}

export default OplataAndDelivery