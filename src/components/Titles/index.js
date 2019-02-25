import React from 'react';
import Title from './Title';
import './style.scss';

const Titles = props => {

  const { data, secondaryTitles } = props;

  return (
    <div className="titles">
      {data.map((title, index) => (
        <React.Fragment>
          <Title 
            key={index} 
            defaultTitle={title.defaultTitle} 
            secondaryTitle={secondaryTitles[index]}
            animside={title.animside}
            parallaxdistance={title.parallaxdistance} />
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}

export default Titles;