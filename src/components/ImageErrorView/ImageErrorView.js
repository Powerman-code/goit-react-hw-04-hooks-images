import errorImage from '../404_error.jpg';
import PropTypes from 'prop-types';

export default function ImageErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} width="400" alt="girl-and-boy-not-found" />
      <p>{message}</p>
    </div>
  );
}

ImageErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};
