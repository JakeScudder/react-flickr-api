import React from 'react';
import Photos from './Photos';
import NotFound from './NotFound';
//Stateful

const PhotoContainer = (props) => {

  
    //If no results, render NotFound Component
    if (props.data.length === 0 && props.loading === false) {
      return (
        <div className="photo-container">
          <h2>Results</h2>
            <NotFound />
        </div>
      )
    } else {

    //Otherwise return Photo components
    return (
      <div className="photo-container">
        <h2>Results</h2>
            <ul>
              { props.data.map( photo=> {
              return <Photos key={photo.id} photo={photo}/>
              })}
            </ul>
      </div>        
     );
    }  
    
  }

export default PhotoContainer;



//Debugging Simple Formatting

// render() {
//     return (
//         this.props.data.map( photo=> {
//             return <Photos key={photo.id} photo={photo}/>
//         })
//     );
// }