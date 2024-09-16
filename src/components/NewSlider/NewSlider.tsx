import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import clothing from '../../assets/images/newAssortment/hoodybluenew.png'
import clothingTwo from '../../assets/images/newAssortment/trousersbluenew.png'
import clothingThree from '../../assets/images/newAssortment/smartTShirtnew.png'
import clothingFour from '../../assets/images/newAssortment/redtrousesnew.png'
import clothingFive from '../../assets/images/newAssortment/whitehoodynew.png'
import styles from './NewSlider.module.css'
import { Link, useNavigate } from 'react-router-dom'


const newAssortment = [clothing, clothingTwo, clothingThree, clothingFour, clothingFive]

const NewSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const navigate = useNavigate()

    function handleNextSlide() {
        setCurrentImage((currentImage + 3) % newAssortment.length)
    }

    function handlePreviousSlide() {
        setCurrentImage(currentImage === 0 ? newAssortment.length - 3 : (currentImage - 3 + newAssortment.length) % newAssortment.length)
    }

    function handleImageClick(index: number) {
        console.log(`Ви натиснули на фото з індексом: ${index + 1}`);
        
        if (index === 0) {
            navigate('/T-Shirts')
        } else if (index === 1) {
            navigate('/trousers')
        } else if (index === 2) {
            navigate('/T-Shirts')
        } else if (index === 3) {
            navigate('/trousers')
        } else if (index === 4) {
            navigate('/hoody')
        }
    }

    return (
        <section className={styles.slider}>
            <h1>НОВИНКИ</h1>
            
            <div className={styles.photosContainer}>
                <FontAwesomeIcon icon={faArrowLeft} onClick={handlePreviousSlide} className={`${styles.arrow} ${styles.leftArrow}`} />
                
                <img 
                    className={styles.currentImage} 
                    src={newAssortment[currentImage]} 
                    alt="" 
                    onClick={() => handleImageClick(currentImage)} 
                />
                
                <img 
                    className={styles.currentImage} 
                    src={newAssortment[(currentImage + 1) % newAssortment.length]} 
                    alt="" 
                    onClick={() => handleImageClick((currentImage + 1) % newAssortment.length)} 
                />
                <img 
                    className={styles.currentImage} 
                    src={newAssortment[(currentImage + 2) % newAssortment.length]} 
                    alt="" 
                    onClick={() => handleImageClick((currentImage + 2) % newAssortment.length)} 
                />
                
                <FontAwesomeIcon icon={faArrowRight} onClick={handleNextSlide} className={`${styles.arrow} ${styles.rightArrow}`} />
            </div>

                <Link to='/shop'>
                    <button className={styles.goToCatalog}>Переглянути товар <FontAwesomeIcon className={styles.longArrow} icon={faArrowRightLong} /></button>
                </Link>
            
        </section>
    )
}

export default NewSlider
