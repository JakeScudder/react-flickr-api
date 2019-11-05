import React from 'react';

//Stateless

const Photos = ({photo}) => {
  
  //Include href form modal in future
  // const link = `${photo.url_o}`
  return (
    <li>
      {/* <a href={link} > */}
      <img srcset={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`}
      src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} alt={photo.title} />
      {/* </a> */}
    </li>
  )
}

export default Photos;