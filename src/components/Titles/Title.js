import React from 'react';

const Title = props => {

  const { defaultTitle, secondaryTitle, animside, parallaxdistance } = props;

  return (
    <div className="title" animside={animside} parallaxdistance={parallaxdistance}>
        <h1 className="primary">
          <span>{defaultTitle}</span>
          <div className="over"></div>
        </h1>
        <h1 className="secondary">
          {secondaryTitle}
        </h1> 
    </div>
  );
}

export default Title;