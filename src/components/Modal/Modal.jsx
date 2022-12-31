import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ContentModal } from './Modal.styled';
import { Image } from 'components/ImageGalleryItem/ImageGalleryItem.styled';

const rootModal = document.querySelector('#root-modal');

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    if (evt.code !== 'Escape') {
      return;
    }
    this.props.onClose();
  };

  handleClick = evt => {
    if (evt.target !== evt.currentTarget) {
      return;
    }
    this.props.onClose();
  };

  render() {
    const { url, tags } = this.props;

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
        onClick={this.handleClick}
      >
        <ContentModal>
          <Image src={url} alt={tags} />
        </ContentModal>
      </Box>,
      rootModal
    );
  }
}
