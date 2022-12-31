import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <GalleryList>
      {images.map(img => (
        <ImageGalleryItem image={img} key={img.id} />
      ))}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired,
      original: PropTypes.string.isRequired,
    })
  ).isRequired,
};
