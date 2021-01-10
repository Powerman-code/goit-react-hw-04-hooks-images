import { Component } from 'react';

import Searchbar from './components/Searchbar/Searchbar.js';
import ImageInfo from './components/ImageInfo/ImageInfo.js';
import './App.css';

class App extends Component {
  state = {
    searchQuerry: '',
    images: [],
    error: null,
  };

  onSubmit = data => {
    this.setState({ searchQuerry: data });
  };

  componentDidMount() {
    // const keyWord = this.state.searchQuerry;
    // console.log(keyWord);
    // this.setState({ loading: true });
    // fetch(
    //   `https://pixabay.com/api/?q=${keyWord}&page=1&key=19008570-42b7cc415e1b0453677c4c4a2&image_type=photo&orientation=horizontal&per_page=12`,
    // )
    //   .then(res => res.json())
    //   .then(({ hits }) =>
    //     this.setState({
    //       images: hits,
    //     }),
    //   )
    //   .catch(error => this.setState({ error }))
    //   .finally(this.setState({ loading: false }));
  }

  render() {
    const { searchQuerry } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        <ImageInfo searchQuerry={searchQuerry} />
      </div>
    );
  }
}

export default App;
