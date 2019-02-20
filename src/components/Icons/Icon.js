import React from 'react';
import SvgComponent from '../SvgComponent';

const Icon = props => {

  const { icon, link, parallaxdistance, handleHover, handleClick, loaded } = props;
  
  return (
    <div 
      className="icon" icon={icon} 
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}>
      <div
        className="parallax-parent"
        parallaxdistance={parallaxdistance}>
        <div className="bg"></div>
        <div className="image">
          <SvgComponent loaded={loaded} name={icon} />
        </div>

        {(icon!=='gmail') ?
          <a href={link} target="_blank" rel="noopener noreferrer"></a> :
          <button onClick={handleClick}></button>
        }
      </div>
    </div>
  );
}

export default Icon;