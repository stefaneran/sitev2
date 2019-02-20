import React from 'react';
import SvgComponent from '../SvgComponent';

const Curtain = props => {

  const { side, loaded } = props;

  return (
    <div className={`curtain ${side}`}>
      <SvgComponent className={side} name="curlyBracket" loaded={loaded} />
    </div>
  );
}

export default Curtain;