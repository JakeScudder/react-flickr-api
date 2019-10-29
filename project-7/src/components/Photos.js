import React from 'react';

//Stateless

const Photos = props => (
        <li>
            <img src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}_m.jpg`} alt="" />
        </li>
);

export default Photos;