import React from 'react';

//Stateless

const ErrorPage = ({ location }) => {
  return(
  <li className="not-found">
    <h3>Sorry, that page does not exist</h3>
    <p>404 Error: The url does not exist for <code>{location.pathname}</code></p>
  </li>
  );
}

export default ErrorPage;