import React from 'react';

const SvgComponent = props => {

  const { className, name, loaded } = props;

  return (
    <img className={className || ''} src={require(`../static/svg/${name}.svg`)} alt={name} onLoad={loaded} />
  );
}

export default SvgComponent;