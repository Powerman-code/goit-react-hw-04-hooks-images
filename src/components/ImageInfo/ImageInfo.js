import { useState, useEffect } from "react";
import api from "../Image-api/images-api";
import PropTypes from "prop-types";
import ImageErrorView from "../ImageErrorView/ImageErrorView";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImagePendingView from "../ImagePendingView/ImagePendingView";
import Button from "../Button/Button";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  REJECTED: "rejected",
  RESOLVED: "resolved",
};

export default function ImageInfo({ searchQuerry }) {
  const [images, setImages] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(Status.IDLE);

  console.log(searchQuerry);

  useEffect(() => {
    if (!searchQuerry) {
      console.log(images);
      return;
    }
    console.log(searchQuerry);
    console.log(images);

    setStatus(status.PENDING);
    console.log(status);

    api
      .fetchImage(searchQuerry, page)
      .then(({ hits }) => {
        console.log(hits);
        setImages((prevState) => [...prevState.images, ...hits]);
        setStatus(status.RESOLVED);
        console.log(status);
        console.log(images);
      })
      .catch((error) => {
        setError(error);
        setStatus(status.REJECTED);
        console.log(status);
      });
  }, [page, images, status, searchQuerry]);

  console.log(images);

  const onLoadMore = () => {
    setPage((prevState) => prevState.page + 1);
  };

  if (status === Status.IDLE) {
    return <h1>Please enter your request</h1>;
  }

  if (status === Status.PENDING) {
    return <ImagePendingView />;
  }

  if (status === Status.REJECTED) {
    return <ImageErrorView message={error} />;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <ImageGallery images={images} />
        {images && <Button onClick={onLoadMore} page={page} />}
      </>
    );
  }
}

ImageInfo.propTypes = {
  searchQuerry: PropTypes.string.isRequired,
};

// import { Component } from 'react';
// import api from '../Image-api/images-api';
// import PropTypes from 'prop-types';
// import ImageErrorView from '../ImageErrorView/ImageErrorView';
// import ImageGallery from '../ImageGallery/ImageGallery';
// import ImagePendingView from '../ImagePendingView/ImagePendingView';
// import Button from '../Button/Button';

// class ImageInfo extends Component {
//   state = {
//     error: null,
//     status: 'idle',
//     page: 1,
//     images: null,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const keyWord = this.props.searchQuerry;
//     const prevKeyWord = prevProps.searchQuerry;
//     const nextPage = this.state.page;
//     const prevPage = prevState.page;
//     // console.log(typeof keyWord);
//     // console.log(this.props);
//     // console.log(keyWord);
//     if (prevKeyWord !== keyWord || prevPage !== nextPage) {
//       this.setState({ status: 'pending', searchResult: null });
//       console.log(prevProps.searchQuerry);
//       console.log(this.props.searchQuerry);
//       api
//         .fetchImage(keyWord, nextPage)
//         .then(({ hits }) => {
//           if (prevPage !== nextPage) {
//             console.log(prevState.images);
//             this.setState({
//               images: [...prevState.images, ...hits],
//               status: 'resolved',
//             });
//           } else {
//             this.setState({
//               images: hits,
//               status: 'resolved',
//             });
//           }
//         })
//         .catch(error => this.setState({ error, status: 'rejected' }));
//     }
//     console.log(this.state);
//   }

//   onLoadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   render() {
//     const { error, status, images, page } = this.state;

//     if (status === 'idle') {
//       return <h1>Please enter your request</h1>;
//     }

//     if (status === 'pending') {
//       return <ImagePendingView />;
//     }

//     if (status === 'rejected') {
//       return <ImageErrorView message={error.message} />;
//     }

//     if (status === 'resolved') {
//       return (
//         <>
//           <ImageGallery images={images} />
//           {images && <Button onClick={this.onLoadMore} page={page} />}
//         </>
//       );
//     }
//   }
// }

// ImageInfo.propTypes = {
//   searchQuerry: PropTypes.string.isRequired,
// };

// export default ImageInfo;
