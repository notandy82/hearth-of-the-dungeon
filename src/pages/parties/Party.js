import React, { useEffect, useState } from 'react'

import Avatar from '../../components/Avatar';



import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Post from '../posts/Post';

const Party = (props) => {
  const { id } = useParams();
  const {
    owner, title, image, description, location,
  } = props;
  



  return (
    <div>
      <Avatar src={image} height={85} />
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>{location}</h3>
      
      
    </div>
  )
}

export default Party