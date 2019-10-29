import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './config';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

//App components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=nebula&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
    this.setState({
      photos: response.data.photos.photo
    });
  })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  });
  }

  render() {
    return(
    <BrowserRouter>
      <div className="container">
        <SearchForm />
        <Nav />
        <PhotoContainer data={this.state.photos} />
      </div>
    </BrowserRouter>
    )
  }

}

export default App;
