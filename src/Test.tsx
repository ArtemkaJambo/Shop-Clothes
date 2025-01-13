import axios from "axios";
import React, {useEffect} from "react";

const Test = () => {
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/auth/posts');
        console.log(response.data); // Вивести отримані дані
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    };

    fetchPosts(); // Викликати запит, коли компонент монтується
  }, []);

  return <div>Test</div>;
};

export default Test;
