import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    const images = this.props.images;
    console.log(images);
    console.log(this.props);
    return (
      <ul className={s.ImageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            src={image.webformatURL}
            alt={image.tags}
            largeImageUrl={image.largeImageURL}
            key={image.id}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
