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

  //Set state for home page, nav links, and search form
  constructor() {
    super();
    this.state = {
      photos: [],
      bees: [],
      butterflies: [],
      birds: [],
      search: []
    };
  }

  //Initial get request for home page and 3 nav links

  componentDidMount() {
    Promise.all([axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=wildflowers&per_page=24&format=json&nojsoncallback=1`), axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=butterflies&per_page=24&format=json&nojsoncallback=1`), axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=bees&per_page=24&format=json&nojsoncallback=1`), axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=birds&per_page=24&format=json&nojsoncallback=1`)])
    .then(([res1, res2, res3, res4]) => {
      this.setState({
        photos: res1.data.photos.photo,
        butterflies: res2.data.photos.photo,
        bees: res3.data.photos.photo,
        birds: res4.data.photos.photo,
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error)
    })
  }

  

  render() {
    return(
    <BrowserRouter>
      <div className="container">
        <SearchForm />
        <Nav />
        <Route 
          exact path="/" 
          render={(props) => <PhotoContainer {...props} data={this.state.photos} /> }
        />
        <Route 
          path="/butterflies" 
          render={(props) => <PhotoContainer {...props} data={this.state.butterflies} /> }
        />
        <Route 
          path="/bees" 
          render={(props) => <PhotoContainer {...props} data={this.state.bees} /> }
        />
        <Route 
          exact path="/birds" 
          render={(props) => <PhotoContainer {...props} data={this.state.birds} /> }
        />
        <Route 
          path="/search/:input" 
          render={(props) => <PhotoContainer {...props} data={this.state.search} /> }
        />
      </div>
    </BrowserRouter>
    )
  }

}

export default App;
