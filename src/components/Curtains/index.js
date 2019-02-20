import React from 'react';
import Curtain from './Curtain';
import './style.scss';

const Curtains = props => {

  const { loaded } = props;

  return(
    <div className="curtains">
      <Curtain side="left" loaded={loaded} />
      <Curtain side="right" loaded={loaded} />
    </div>
  );
}

export default Curtains;