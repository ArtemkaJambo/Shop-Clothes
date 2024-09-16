import styles from './Moda.module.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

interface ModalProps {
  modal: boolean;
  setModal: (value: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ modal, setModal }) => {
  if (!modal) return null;
  const [signIn, setSignIn] = useState(false); // return boolean
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [fullnameError, setFullnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // signIn section
  const [emailSignIn, setEmailSignIn] = useState('');
  const [passwordSignIn, setPasswordSignIn] = useState('');
  const [emailSignInError, setEmailSignInError] = useState('');
  const [passwordSignInError, setPasswordSignInError] = useState('');

  function clearInputsSignIn() {
    setEmailSignIn('')
    setPasswordSignIn('')
    setEmailSignInError('')
    setPasswordSignInError('')
  }

  function clearInputsSignUp() {
    setFullname('')
    setPassword('')
    setEmail('')
  }


  function switchScreens(value: boolean) {
    setSignIn(value)
    if (value) {
      clearInputsSignUp()
    } else {
      clearInputsSignIn()
    }
    }  

  function checkSignInInputs() {

    if (!passwordSignIn) {
      setPasswordSignInError('Пароль обов\'язковий')

    }
    
    if (!emailSignIn) {
      setEmailSignInError('Е-Пошта обов\'язкова')
    }

    if (emailSignIn && passwordSignIn) {
      alert('Ви зареєструвались!')
    }
  }

  function checkCorrentInput() {

    if (!fullname) {
      setFullnameError('Ім\'я та прізвище обов\'язкові')
    }
    if (!email) {
      setEmailError('Е-Пошта обов\'язкова')

    }
    if (!password) {
      setPasswordError('Пароль обов\'язковий')
    }
    
    if (fullname && email && password) {
      alert('Ви зареєструвались!')
    }
  }

  function removeFullNameError(e: React.ChangeEvent<HTMLInputElement>){
    setFullname(e.target.value)

    if (e.target.value !== '') {
      setFullnameError('')
    }
  }

  function removeEmailError(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
    
    if (e.target.value !== '') {
      setEmailError('')
    }
  }
  function removePasswordError(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
    
    if (e.target.value !== '') {
      setPasswordError('')
    }
  }

  function removeEmailErrorSignIn(e: React.ChangeEvent<HTMLInputElement>) {
    setEmailSignIn(e.target.value)

    if (e.target.value !== '') {
      setEmailSignInError('')
    }
  }

  function removePasswordErrorSignIn(e: React.ChangeEvent<HTMLInputElement>) {
      setPasswordSignIn(e.target.value)
      
      if (e.target.value !== '') {
        setPasswordSignInError('')
      }

  }

  return (
    <div 
      className={styles.modalScreen}  onClick={() => setModal(false)}   >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
         <FontAwesomeIcon icon={faXmark} className={styles.closeModal} onClick={() => setModal(false)} />
              <div className={styles.register}>
                <button onClick={() => switchScreens(false)} className={signIn === false ? `${styles.activeSignIn}` : ' '}>Вхід</button>
                <button onClick={() => switchScreens(true)} className={signIn === true ? `${styles.activeSignIn}` : ' '}>Реєструватись</button>
              </div>
              {signIn === true ? 
            <form className={styles.form}>
                <div className={styles.inputs}>
                    <div className={styles.inputItem}>
                        <p>Імя та <br /> Прізвище</p>
                        <input type="text" value={fullname}
                         onChange={removeFullNameError} 
                         />
                         {fullnameError ? <p className={styles.errorText}>{fullnameError}</p> : ''}
                    </div>
                    
                    <div className={styles.inputItem}>
                        <p>Е-Пошта</p>
                        <input type="email"
                        value={email}
                        onChange={removeEmailError}
                        />
                        {emailError ? <p className={styles.errorText}>{emailError}</p> : ''}
                    </div>
                    <div className={styles.inputItem}>
                        <p>Пароль</p>
                        <input type="password"
                        value={password}
                        onChange={removePasswordError}
                        />
                        {passwordError ? <p className={styles.errorText}>{passwordError}</p> : ''}
                    </div>
                </div>
            </form>
              
              : 
              <form className={styles.form}>
                <div className={styles.inputs}>
                    <div className={styles.inputItem}>
                        <p>Е-Пошта</p>
                        <input type="email" value={emailSignIn} onChange={removeEmailErrorSignIn} />
                        {emailSignInError ? <p className={styles.errorText} >{emailSignInError}</p> : ''}
                    </div>
                    <div className={styles.inputItem}>
                        <p>Пароль</p>
                        <input type="password" value={passwordSignIn} onChange={removePasswordErrorSignIn} />
                        {passwordSignInError ? <p className={styles.errorText}>{passwordSignInError}</p> : ''}
                    </div>
                </div>
            </form>
              }
        <button className={styles.btnRegister}  
      onClick={signIn ? checkCorrentInput : checkSignInInputs }>
          {signIn ? 'Зареєструватись' : 'Увійти'}</button>
      </div>
    </div>
  );
};

export default Modal;

