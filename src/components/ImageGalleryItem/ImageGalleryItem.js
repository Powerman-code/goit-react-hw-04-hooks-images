import { useState } from "react";
import PropTypes from "prop-types";

import Modal from "../Modal/Modal";
import s from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ src, alt, largeImageUrl }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <li className={s.ImageGalleryItem}>
      <img
        onClick={toggleModal}
        src={src}
        alt={alt}
        className={s.ImageGalleryItemImage}
      />
      {showModal && (
        <Modal onClose={toggleModal} src={largeImageUrl} alt={alt} />
      )}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
};

// import { Component } from 'react';
// import PropTypes from 'prop-types';

// import Modal from '../Modal/Modal';
// import s from './ImageGalleryItem.module.css';

// class ImageGalleryItem extends Component {
//   state = { showModal: false };
//   toggleModal = () => {
//     this.setState(state => ({
//       showModal: !state.showModal,
//     }));
//   };

//   render() {
//     const { src, alt, largeImageUrl } = this.props;
//     const { showModal } = this.state;
//     return (
//       <li className={s.ImageGalleryItem}>
//         <img
//           onClick={this.toggleModal}
//           src={src}
//           alt={alt}
//           className={s.ImageGalleryItemImage}
//         />
//         {showModal && (
//           <Modal onClose={this.toggleModal} src={largeImageUrl} alt={alt} />
//         )}
//       </li>
//     );
//   }
// }

// ImageGalleryItem.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
//   largeImageUrl: PropTypes.string.isRequired,
// };

// export default ImageGalleryItem;
