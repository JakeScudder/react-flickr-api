import React from 'react';

//Stateless

const Photos = ({photo}) => {

  
  return (
    <li>
      <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} alt={photo.title} />
    </li>
  )
}

export default Photos;