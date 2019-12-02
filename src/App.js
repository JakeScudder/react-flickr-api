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
  //Set state for fetch requests and loading indicators.
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }
  
  //After components
  componentDidMount() {
    this.handleFetch();
  }

  //Handles all fetch requests for: home route, navigation, and search forms
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

  //Renders the app's main page
  render() {
    return(
    <BrowserRouter>
      <div className="container">
        <SearchForm 
          handleSearch={this.handleFetch}
        />
        <Nav fetchNav={this.handleFetch}/>
          {/* Loading State indicator */}
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
            render={(props) => <PhotoContainer {...props} data={this.state.photos} loading={this.state.loading} /> }
            />
          <Route component={PageNotFound}/>
          
        </Switch>
        
      </div>
    </BrowserRouter>
    )
  }
}

export default App;