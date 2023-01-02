import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Box } from 'components/Box/Box';
import { createPortal } from 'react-dom';
import { ContentModal } from './Modal.styled';
import { Image } from 'components/ImageGalleryItem/ImageGalleryItem.styled';

const rootModal = document.querySelector('#root-modal');

export const Modal = ({ url, tags, onClose }) => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code !== 'Escape') {
        return;
      }
      onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleClick = evt => {
    if (evt.target !== evt.currentTarget) {
      return;
    }
    onClose();
  };

  return createPortal(
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex="1200"
      bg="overlay"
      onClick={handleClick}
    >
      <ContentModal>
        <Image src={url} alt={tags} />
      </ContentModal>
    </Box>,
    rootModal
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
