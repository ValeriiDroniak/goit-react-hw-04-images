import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModal: false,
  };

  static propTypes = {
    image: PropTypes.shape({
      id: PropTypes.number,
      tags: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired,
      original: PropTypes.string.isRequired,
    }).isRequired,
  };

  openModal = () => {
    this.setState({ isModal: true });
  };

  closeModal = () => {
    this.setState({ isModal: false });
  };

  render() {
    const { tags, preview, original } = this.props.image;

    return (
      <GalleryItem>
        <Image cover src={preview} alt={tags} onClick={this.openModal} />
        {this.state.isModal && (
          <Modal url={original} tags={tags} onClose={this.closeModal} />
        )}
      </GalleryItem>
    );
  }
}
