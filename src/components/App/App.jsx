import { useState, useEffect } from 'react';
import { BarLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import * as API from 'services/api';
import { scrollTo } from 'utils/scrollTo';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { ScrollUp } from 'components/ScrollUp/ScrollUp';
import { Box } from 'components/Box/Box';
import 'react-toastify/dist/ReactToastify.css';

const override = {
  display: 'block',
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  background: '#dedede',
  zIndex: '1500',
};

export const App = () => {
  const [images, setImages] = useState(() => []);
  const [totalImages, setTotalImages] = useState(0);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (query === '') {
      return;
    }

    const manageRequest = async () => {
      setIsLoading(true);
      try {
        const imagesData = await API.getImagesData(query, page);
        const images = imagesData.hits.map(
          ({ id, webformatURL, largeImageURL, tags }) => ({
            id,
            tags,
            preview: webformatURL,
            original: largeImageURL,
          })
        );

        setImages(state => [...state, ...images]);
        setTotalImages(imagesData.totalHits);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast.error(error.message);
      }
    };

    manageRequest();
  }, [page, query]);

  const handleQuery = search => {
    if (search === query || !search) {
      return;
    }

    setImages([]);
    setTotalImages(0);
    setQuery(search);
    setPage(1);
    setIsLoading(false);
    setScrollUp(false);
  };

  const nextPage = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Searchbar onSubmit={handleQuery} />
      <Box as="main" overflow="hidden" textAlign="center" mb={5}>
        <ImageGallery images={images} />
        {images.length < totalImages && (
          <Button onClick={nextPage}>Load more</Button>
        )}
      </Box>
      <BarLoader
        cssOverride={override}
        loading={isLoading}
        color=" #07bc0c "
        height={4}
        aria-label="Loading Spinner"
        speedMultiplier={0.5}
      />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {scrollUp && <ScrollUp onClick={() => scrollTo(0)} />}
    </Box>
  );
};
