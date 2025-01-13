import React, { useState } from "react";
import './Register.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {

  const [error, setError] = useState<Record<string, string>>({});
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate()


  const SubmitRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newError: Record<string, string> = {}
  
    if (!values.username || !values.email || !values.password) {

      newError.username = !values.username ? `Введіть ваше ім'я та прізвище` : ''
      newError.email = !values.email ? 'Введіть вашу почту' : ''
      newError.password = !values.password ? 'Введіть ваш пароль' : ''
      setError(newError)
      return
    }
    setError({})


    try {
      const response = await axios.post('http://localhost:3000/register', values)

       if (response.status === 201) {
        navigate("/login");
      }


      setValues({
        username: '',
        email: '',
        password: ''
      })

    } catch (err) {
      console.log(err);
      
    }
  }

  const onChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value})
  }

  return <>
    <form className='formOfRegister' onSubmit={SubmitRegistration}>

      <h1>Реєстрація</h1>
      <div className="formOfInput input">
        <label htmlFor="username">Ім'я та прізвище</label>
        <input type="text" onChange={onChangeInputs} name="username" value={values.username} />
        {error.username && <p className="errorText">{error.username}</p>}
      </div>
      <div className="formOfInput input">
        <label htmlFor="email">Email адресса</label>
        <input type="email" onChange={onChangeInputs} name="email" value={values.email} />
        {error.email && <p className="errorText">{error.email}</p>}
      </div>
      <div className="formOfInput input">
        <label htmlFor="password">Пароль</label>
        <input type="password" onChange={onChangeInputs} name="password" value={values.password} />
        {error.password && <p className="errorText">{error.password}</p>}
      </div>
      <button className="regBtn">Зареєструватись</button>
      <div className="existsAccount">
        <p>Вже маєш аккаунт? </p>
        <Link to='/login'>
          <p className="login">Увійти</p>
        </Link>
      </div>
    </form>
  </>
};

export default Register;
