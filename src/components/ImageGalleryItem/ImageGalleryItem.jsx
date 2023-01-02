import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image: { tags, preview, original } }) => {
  const [isModal, setIsModal] = useState(() => false);

  const togleIsModal = () => {
    setIsModal(!isModal);
  };

  return (
    <GalleryItem>
      <Image cover src={preview} alt={tags} onClick={togleIsModal} />
      {isModal && <Modal url={original} tags={tags} onClose={togleIsModal} />}
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number,
    tags: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    original: PropTypes.string.isRequired,
  }).isRequired,
};
