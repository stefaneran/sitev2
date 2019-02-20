import React from 'react';
import Icon from './Icon';
import './style.scss';

const Icons = props => {

  const { handleHover, handleClick, loaded } = props;
  const icons = props.data;

  return(
    <div className="icons">
      {icons.map((icon,key) => (
        <Icon 
          key={key} 
          icon={icon.icon}
          link={icon.link}
          handleHover={handleHover}
          handleClick={handleClick}
          loaded={loaded}
          parallaxdistance={icon.parallaxdistance} />
      ))}
    </div>
  );
}

export default Icons;
