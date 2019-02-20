import React from 'react';
import Title from './Title';
import './style.scss';

const Titles = props => {

  const { data, secondaryTitles } = props;

  return (
    <div className="titles">
      {data.map((title, index) => (
        <div key={index}>
          <Title 
            key={index} 
            defaultTitle={title.defaultTitle} 
            secondaryTitle={secondaryTitles[index]}
            animside={title.animside}
            parallaxdistance={title.parallaxdistance} />
          <br />
        </div>
      ))}
    </div>
  );
}

export default Titles;