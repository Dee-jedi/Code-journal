import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './../../api/posts';
import { v4 as uuidv4 } from 'uuid';

export const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setError('');
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const filteredPosts = posts.filter(
      (post) =>
        post.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredPosts(filteredPosts.reverse());
  }, [searchTerm, posts]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (image) {
      const newPost = {
        id: uuidv4(),
        name,
        description,
        price,
        duration,
        imageUrl: imagePreview,
      };

      try {
        const response = await api.post('/posts', newPost);
        setPosts((prevPosts) => [...prevPosts, response.data]);
        setName('');
        setDescription('');
        setPrice('');
        setDuration('');
        setImage(null);
        setImagePreview(null);
        navigate('/');
      } catch (err) {
        setError(err.message);
      }
    } else {
      setError('Image is required'); // Optional: Handle an error if the image is not set
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <DataContext.Provider
      value={{
        posts,
        error,
        description,
        setDescription,
        name,
        setName,
        handleSubmit,
        handleDelete,
        searchTerm,
        setSearchTerm,
        filteredPosts,
        duration,
        setDuration,
        price,
        setPrice,
        setImage,
        setImagePreview,
        imagePreview,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
