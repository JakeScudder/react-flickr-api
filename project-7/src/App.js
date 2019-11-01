import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './config';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//App components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import ErrorPage from './components/ErrorPage';

class App extends Component {

  //Set state for home page, nav links, and search form. Also loading indicators.
  constructor() {
    super();
    this.state = {
      photos: [],
      bees: [],
      butterflies: [],
      birds: [],
      search:[],
      loading: true,
      searchLoad: true
    };
  }

  //Initial get request for home page and 3 nav links
  componentDidMount() {
    Promise.all([axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=buttercups&per_page=24&format=json&nojsoncallback=1`), axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=butterflies&per_page=24&format=json&nojsoncallback=1`), axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=bees&per_page=24&format=json&nojsoncallback=1`), axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=birds&per_page=24&format=json&nojsoncallback=1`)])
    .then(([res1, res2, res3, res4]) => {
      this.setState({
        photos: res1.data.photos.photo,
        butterflies: res2.data.photos.photo,
        bees: res3.data.photos.photo,
        birds: res4.data.photos.photo,
        loading: false
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error)
    })
  }

  //Handles search by setting search array to search state
  handleSearch = (searchArray) => {
    this.setState({
      search: searchArray,
      searchLoad: false
    })
    if(this.state.search.length > 0) {
      console.log('Photos Available')
      return 
    }
    else {
      console.log('Not Found')
    }
  }

  //resets Search State
  resetState = () => {
    this.setState({
      searchLoad: true,
    })
  }

  //Renders the main page
  render() {
    return(
    <BrowserRouter>
      <div className="container">
        <SearchForm 
          addSearchState={this.handleSearch}
          resetSearchState={this.resetState}
        />
        <Nav />

        <Switch>
          {/* Loading State indicator on intial page load*/}
          {
          (this.state.loading)
          ? <p>Loading...</p>
          : 
          <Route 
            exact path="/" 
            render={(props) => <PhotoContainer {...props} data={this.state.photos} /> }
          />
          }
          <Route 
            path="/butterflies" 
            render={(props) => <PhotoContainer {...props} data={this.state.butterflies} /> }
          />
          <Route 
            path="/bees" 
            render={(props) => <PhotoContainer {...props} data={this.state.bees} /> }
          />
          <Route 
            path="/birds" 
            render={(props) => <PhotoContainer {...props} data={this.state.birds} /> }
          />
          
          {/* Loading State indicator so Not Found won't display unless search has been returned */}
          {
          (this.state.searchLoad)
          ? <p>Loading...</p>
          : 
          <Route 
            path="/:input" 
            render={(props) => <PhotoContainer {...props} data={this.state.search} /> }
            />
          }
          <Route component={ErrorPage}/>
          
        </Switch>
        
      </div>
    </BrowserRouter>
    )
  }
}

export default App;
