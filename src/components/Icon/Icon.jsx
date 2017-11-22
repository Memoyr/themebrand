import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const files = require.context('!svg-sprite-loader!svgo-loader?useConfig=svgoConfig!../../img/svg/icon', false, /.*\.svg$/);
files.keys().forEach(files);

const SymbolIcon = styled.svg`
  width: ${props => (props.size === 'small') ? '20px' : (props.size === 'large') ? '60px' : '10px'};
  height: ${props => (props.size === 'small') ? '20px' : (props.size === 'large') ? '60px' : '10px'};
  fill: ${props => props.stroke ? 'transparent' : props.theme.primary};
  stroke: ${props => props.stroke && (props.theme.primary) ? props.theme.primary : (props.stroke && (!props.theme.primary)) ? 'black': '' };
`;

const Icon = ({...props}) => {
  return (
      <SymbolIcon size={props.size} stroke={props.stroke}>
        <use href={'#' + props.symbol}  aria-labelledby={props.name + ' icon'}/>
      </SymbolIcon>
    )
};

Icon.defaultProps = {
    stroke: false
};

Icon.propTypes = {
    stroke: PropTypes.bool,
    symbol: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'large']),
    name: PropTypes.string.isRequired
};

export default Icon;
