// import { getPhotos } from 'apiService/photos';
import { Form, Text } from 'components';
import { useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);

  const handleSubmit = value => {
    setQuery(value);
  };
  return (
    <>
      <Form onSubmit={handleSubmit} />
      <Text textAlign="center">Let`s begin search 🔎</Text>
    </>
  );
};
