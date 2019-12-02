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
import PageNotFound from './components/PageNotFound';

class App extends Component {

  //Set state for home page, nav links, and search form. Also loading indicators.
  constructor() {
    super();
    this.state = {
      photos: [],
      search:[],
      loading: true
    };
  }
  
  componentDidMount() {
    this.handleFetch();
  }

  //Handles fetch requests
  handleFetch = (query = 'buttercups') => {
    this.setState({
      loading: true
    })
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&extras=url_o&format=json&nojsoncallback=1`)
    .then(res1 => {
      this.setState({
        photos:res1.data.photos.photo,
        loading: false
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error)
    })
  }

  //Handles the search request from the search form
  handleSearchRequest = (input) => {
    this.setState({
      loading: true
    })
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${input}&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
    this.setState({
      search: response.data.photos.photo,
      loading: false
    })
  })
  .catch(error => {
    console.log("We couldn't find what you searched for.", error)
  })
  }

  //Renders the app's main page
  render() {
    return(
    <BrowserRouter>
      <div className="container">
        <SearchForm 
          handleSearch={this.handleSearchRequest}
        />
        <Nav fetchNav={this.handleFetch}/>
          {/* Loading State indicator on intial page load
          { */}
          { (this.state.loading) 
           ?  <p className="loading" >Loading...</p>
           :  null
          }
        <Switch>
          
          <Route 
            exact path="/" 
            render={(props) => <PhotoContainer {...props} data={this.state.photos} loading={this.state.loading} /> }
          />
          
          <Route 
            exact path="/butterflies" 
            render={(props) => <PhotoContainer {...props} data={this.state.photos} /> }
          />
          <Route 
            exact path="/bees" 
            render={(props) => <PhotoContainer {...props} data={this.state.photos} /> }
          />
          <Route 
            exact path="/birds" 
            render={(props) => <PhotoContainer {...props} data={this.state.photos} /> }
          />
          
          <Route 
            exact path="/search/:input" 
            render={(props) => <PhotoContainer {...props} data={this.state.search} loading={this.state.loading} /> }
            />
          <Route component={PageNotFound}/>
          
        </Switch>
        
      </div>
    </BrowserRouter>
    )
  }
}

export default App;

// //Initial get request for home page and 3 nav links
// componentDidMount() {
//   Promise.all([axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=buttercups&per_page=24&extras=url_o&format=json&nojsoncallback=1`), axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=butterflies&per_page=24&format=json&nojsoncallback=1`), axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=bees&per_page=24&format=json&nojsoncallback=1`), axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=birds&per_page=24&format=json&nojsoncallback=1`)])
//   .then(([res1, res2, res3, res4]) => {
//     this.setState({
//       photos: res1.data.photos.photo,
//       butterflies: res2.data.photos.photo,
//       bees: res3.data.photos.photo,
//       birds: res4.data.photos.photo,
//       loading: false
//     });
//   })
//   .catch(error => {
//     console.log('Error fetching and parsing data', error)
//   })
// }
