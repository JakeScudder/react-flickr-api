import React, { Component } from 'react';
import Photos from './Photos';
//Stateful

class PhotoContainer extends Component {

    render() {
        // const results = this.props.data;
        // let gifs = results.data.map(gif => 
        //         <Photos 
        //             farm={gif.farm}
        //             server={gif.server}
        //             id={gif.id}
        //             secret={gif.secret}
        //         />
        //     );

        return (
        <div className="photo-container">
            <h2>Results</h2>
                {/* <ul>
                    {gifs}
                </ul> */}
        </div>
        );
    }
}

export default PhotoContainer;