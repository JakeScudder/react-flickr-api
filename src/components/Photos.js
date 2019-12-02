import React from 'react';

const Photos = ({photo}) => {
  //Include href form modal in future
  // const link = `${photo.url_o}`
  return (
    <li>
      {/* <a href={link} > */}
      <img srcSet={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`}
      src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} alt={photo.title} />
      {/* </a> */}
    </li>
  )
}

export default Photos;