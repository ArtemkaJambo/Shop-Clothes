import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css'

const Home = () => {
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      if (!accessToken) {
        console.log('Токен відсутній, перенаправлення на сторінку входу.');
        navigate('/login');
        return;
      }

      const response = await axios.get('http://localhost:3000/home', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 200) {
        console.log('User authenticated:', response.data);
      } else {
        console.log('Недійсний статус відповіді, перенаправлення на головну.');
        navigate('/');
      }
    } catch (err) {
      console.error('Помилка при отриманні даних користувача:', err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
      eligendi repudiandae error quas quidem iusto! Earum ipsa voluptate illo
      atque laborum sunt. Repellendus iusto expedita repellat, saepe odio,
      doloremque quae animi harum vel molestiae praesentium accusamus! Natus
      doloremque aliquid sit alias! Modi nostrum sit sed nesciunt, suscipit
      deleniti fugiat laboriosam exercitationem autem dolor illo voluptatum
      rem. Hic, in autem totam vero sequi debitis velit labore commodi alias
      natus sint repudiandae ad atque. Ullam officiis distinctio laborum fugiat
      facere architecto omnis hic adipisci mollitia? Distinctio tenetur quisquam
      fugit ipsam aspernatur, corporis, exercitationem consectetur nulla, ex
      ipsa nemo earum repellat iste dignissimos?
    </p>
  );
};

export default Home;
