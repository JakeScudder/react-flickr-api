import React, { Component } from 'react';
import Photos from './Photos';
//Stateful

class PhotoContainer extends Component {
 
    render() {
        return (
            <div className="photo-container">
                <h2>Results</h2>
                    <ul>
                        { this.props.data.map( photo=> {
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