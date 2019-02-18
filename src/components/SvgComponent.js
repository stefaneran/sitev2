import React from 'react';

const SvgComponent = props => {

  const { className, name } = props;

  return (
    <img className={className || ''} src={require(`../static/svg/${name}.svg`)} alt={name} />
  );
}

export default SvgComponent;