import React from 'react';
import Curtain from './Curtain';
import './style.scss';

const Curtains = () => (
  <div className="curtains">
    <Curtain side="left" />
    <Curtain side="right" />
  </div>
);

export default Curtains;