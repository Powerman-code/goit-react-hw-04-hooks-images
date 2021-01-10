import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import IconButton from '../IconButton/IconButton';
// import { ReactComponent as AddIcon } from '../icons/icon-cross-1.png';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    // console.log(e.code);
    if (e.code === 'Escape') {
      console.log('Нужно закрыть модалку');
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    console.log('клик в бэкдроп');
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    const { src, alt, onClose } = this.props;
    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>
          <img src={src} alt={alt} />
        </div>
        <div className={s.Options}>
          <IconButton onClick={onClose}>{/* <AddIcon /> */}</IconButton>
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
