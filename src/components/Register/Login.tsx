import React, { useState } from "react";
import './Register.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const navigate = useNavigate();

  const [error, setError] = useState<Record<string, string>>({});
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!values.email || !values.password) {
      newErrors.email = !values.email ? 'Введіть ваш email' : '';
      newErrors.password = !values.password ? 'Введіть ваш пароль' : '';
      setError(newErrors);
      return;
    }

    setError({});

    try {
      const response = await axios.post('http://localhost:3000/login', values);

      if (response.status === 200) {
        localStorage.setItem('accessToken', response.data.token);
        navigate('/');
        console.log('User logged successfully');
      }

      setValues({
        email: '',
        password: ''
      });

    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.log('mistake in login:', err.message);
      } else {
        console.error('Unknown error:', err);
      }
    }
  };

  const onChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return <>
    <form className='formOfRegister' onSubmit={submitLogin}>
      <h1>Вхід</h1>
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
      <button className="regBtn">Увійти</button>
      <div className="existsAccount">
        <p>Вперше тут?</p>
        <Link to='/register'>
          <p className="login">Реєстрація</p>
        </Link>
      </div>
    </form>
  </>
};

export default Login;
