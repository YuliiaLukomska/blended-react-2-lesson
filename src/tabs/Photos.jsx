import { getPhotos } from 'apiService/photos';
import { Form, Text } from 'components';
import { useEffect, useState } from 'react';


export const Photos = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [empty, setEmpty] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

useEffect(() => {
  if(!query) return;
  const fetchData = async() =>{
    setIsLoading(true)
    try {
      const {photos, total_results, per_page} = await getPhotos(query, page)
      if(photos.length == 0){
        setEmpty(true)
        return;
      }
      setImages((prevState) => [...prevState, ...photos])
      setIsVisible(page < Math.ceil(total_results / per_page))
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }
  fetchData()
}, [query, page])

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
