import React from 'react';

//Stateless

const PageNotFound = ({ location }) => {

  return(
  <div className="photo-container">
    <li className="not-found">
      <h3>Sorry, that page does not exist</h3>
      <p>404 Error: The url does not exist for <code>{location.pathname}</code> , so here is a picture of Big Sur. Please enter your search in the search bar.</p>
      {/* Image for empty space styling on webpage */}
      <a data-flickr-embed="true" href="https://www.flickr.com/photos/9756642@N02/7459375332/in/album-72157630147982346/" title="Camping-24"><img src="https://live.staticflickr.com/7250/7459375332_7f5059b109_5k.jpg" className="ocean" width="1500" height="600" alt="Camping-24" /><script async src="//embedr.flickr.com/assets/client-code.js" charSet="utf-8"></script>
      </a>
    </li>
  </div>
  );
}

export default PageNotFound;