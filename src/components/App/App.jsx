import { Component } from 'react';
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

export class App extends Component {
  state = {
    images: [],
    totalImages: 0,
    query: '',
    page: 1,
    isLoading: false,
    scrollUp: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });

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

        this.setState(state => ({
          images: [...state.images, ...images],
          totalImages: imagesData.totalHits,
          isLoading: false,
        }));

        if (prevState.query !== query) {
          toast.success(`${imagesData.totalHits} images were found!`);
        }
      } catch (error) {
        this.setState({ isLoading: false });
        toast.error(error.message);
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    if (window.scrollY > window.innerHeight) {
      this.setState({ scrollUp: true });
    } else {
      this.setState({ scrollUp: false });
    }
  };

  handleQuery = query => {
    if (query === this.state.query) {
      return;
    }

    this.setState({
      images: [],
      totalImages: 0,
      query,
      page: 1,
      isLoading: false,
      scrollUp: false,
    });
  };

  nextPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, totalImages, isLoading, scrollUp } = this.state;

    return (
      <Box display="flex" flexDirection="column" width="100%">
        <Searchbar onSubmit={this.handleQuery} />
        <Box as="main" overflow="hidden" textAlign="center" mb={5}>
          <ImageGallery images={images} />
          {images.length < totalImages && (
            <Button onClick={this.nextPage}>Load more</Button>
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
  }
}
