import React from 'react';
import './style.scss';
import '../../';

const Background = props => {

  const { src, loaded } = props;

  return (
    <img
      className="background" 
      src={require(`../../static/images/${src}`)}
      alt="background"
      onLoad={loaded} />
  );
}

export default Background;