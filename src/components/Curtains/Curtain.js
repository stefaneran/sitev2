import React from 'react';
import SvgComponent from '../SvgComponent';

const Curtain = props => {

  const { side } = props;

  return (
    <div className={`curtain ${side}`}>
      <SvgComponent className={side} name="curlyBracket" />
    </div>
  );
}

export default Curtain;