// import styles from './Moda.module.css'
// import { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faXmark} from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// interface ModalProps {
//   modal: boolean;
//   setModal: (value: boolean) => void;
// }

// const Modal: React.FC<ModalProps> = ({ modal, setModal }) => {
//   if (!modal) return null;
//   const [values, setValues] = useState({
//     username: '',
//     email: '',
//     password: ''
//   });

//   const [values2, setValues2] = useState({
//     email2: '',
//     password2: ''
//   });

//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [signIn, setSignIn] = useState(false); // return boolean

//   const navigate = useNavigate()

//   const fetchUser = async () => {
//     try {
//       const token = localStorage.getItem('token')
//  if (!token) {
//       console.log('No token found');
//       return;
//     }

//       const response = await axios.get('http://localhost:3000/home', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       })

//       if (response.status === 200) {
//         console.log('user authenticated: ', response.data);
        
//       }

//     } catch (err) {
//       console.log(err);
//     }
//   }

//   useEffect(() => {
//     fetchUser()
//   }, [])

//   function clearInputsSignIn() {
//     setValues2({
//       email2: '',
//       password2: ''
//     })
//   }

//   function clearInputsSignUp() {
//      setValues({
//       username: '',
//       email: '',
//       password: ''
//     })
//   }


// const onChangeFn = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const { name, value } = e.target;

//   // Оновлення значень у values та values2
//   setValues({ ...values, [name]: value });
//   setValues2({ ...values2, [name]: value });

//   setErrors((prevErrors) => {
//     const newErrors = { ...prevErrors };

//     if (value.trim() !== '') {
//       delete newErrors[name];
//     }
//     if (name in values2 && value.trim() !== '') {
//       delete newErrors[name];
//     }

//     return newErrors;
//   });
// };

//   function switchScreens(value: boolean) {
//     setSignIn(value)
//     if (value) {
//       clearInputsSignUp()
//     } else {
//       clearInputsSignIn()
//     }
//     }  

//   const checkSignInInputs = async () => {
//      const newErrors = {} as Record<string, string>;

//   if (!values2.email2) {
//     newErrors.email2 = "Е-Пошта обов'язкова";
//   }

//   if (!values2.password2) {
//     newErrors.password2 = "Пароль обов'язковий";
//   }

//     setErrors(newErrors);
//     try {
//       const response = await axios.post('http://localhost:3000/login', values)
//       navigate('/home')
      
//       if (response.status === 200) {
//         localStorage.setItem('token', response.data.token)
//         navigate('/register')
//       }
//     } catch (err) {
//       console.log('There is an error in value2', err);
      
//     }
//   }

//   const checkCorrentInput = async () => {

//   const newErrors = {} as Record<string, string>;

//     if (!values.username) {
//       newErrors.username = "Ім'я та прізвище обов'язкові";
//     }
//     if (!values.email) {
//       newErrors.email = "Е-Пошта обов'язкова";
//     }

//     if (!values.password) {
//       newErrors.password = "Пароль обов'язковий";
//     }

//   setErrors(newErrors);
//     try {

//       const response = await axios.post('http://localhost:3000', values)
      
//       setValues({
//         username: '',
//         email: '',
//         password: ''
//         })
      
//       if (response.status === 201) {
//         setModal(false)
//       }

 
//     } catch (err) {
//       console.log(err); 
//     }
 
      
//   }
  
//   return (
//     <div 
//       className={styles.modalScreen}  onClick={() => setModal(false)}   >
//       <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
//          <FontAwesomeIcon icon={faXmark} className={styles.closeModal} onClick={() => setModal(false)} />
//               <div className={styles.register}>
//                 <button onClick={() => switchScreens(false)} className={signIn === false ? `${styles.activeSignIn}` : ' '}>Вхід</button>
//                 <button onClick={() => switchScreens(true)} className={signIn === true ? `${styles.activeSignIn}` : ' '}>Реєструватись</button>
//               </div>
//               {signIn === true ? 
//             <form className={styles.form} onSubmit={checkCorrentInput}>
//                 <div className={styles.inputs}>
//                     <div className={styles.inputItem}>
//                         <p>Імя та <br /> Прізвище</p>
//                 <input type="text"
//                   value={values.username}
//                   onChange={onChangeFn} 
//                   name='username'
//                 />
//               {errors.username && <p className={styles.errorText}>{errors.username}</p>}
//                     </div>
                    
//                     <div className={styles.inputItem}>
//                         <p>Е-Пошта</p>
//                         <input type="email"
//                         value={values.email}
//                   onChange={onChangeFn}
//                   name='email'
//                 />
//                         {errors.email ? <p className={styles.errorText}>{errors.email}</p> : ''}
//                     </div>
//                     <div className={styles.inputItem}>
//                         <p>Пароль</p>
//                         <input type="password"
//                         value={values.password}
//                   onChange={onChangeFn}
//                   name='password'
                  
//                 />
//                 {errors.password ? <p className={styles.errorText}>{errors.password}</p> : ''}
//                     </div>
//                 </div>
//             </form>
              
//               :  // Sign In
//               <form className={styles.form}>
//                 <div className={styles.inputs}>
//                     <div className={styles.inputItem}>
//                         <p>Е-Пошта</p>
//                 <input type="email" value={values2.email2} onChange={onChangeFn}
//                   name='email2'
//                 />
//                         {errors.email2 ? <p className={styles.errorText}>{errors.email2}</p> : ''}
//                     </div>
//                     <div className={styles.inputItem}>
//                         <p>Пароль</p>
//                 <input type="password" value={values2.password2} onChange={onChangeFn}
//                   name='password2'
//                 />
//                 {errors.password2 ? <p className={styles.errorText}>{errors.password2}</p> : ''}

//                     </div>
//                 </div>
//             </form>
//               }
//         <button className={styles.btnRegister}  
//       onClick={signIn ? checkCorrentInput : checkSignInInputs }>
//           {signIn ? 'Зареєструватись' : 'Увійти'}</button>
//       </div>
//     </div>
//   );
// };

// export default Modal;

