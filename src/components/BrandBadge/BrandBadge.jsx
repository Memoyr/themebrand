import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon/Icon.jsx';
import { rgba } from 'polished';


const Badge = styled.button`
	padding: 5px;
	background-color: ${props => props.theme.primary ? rgba(props.theme.primary, 0.4) : 'black'};
	border: transparent;
	border-radius: 3px;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	color: 'transparent';
	transition: background-color ease .6s;

  &:hover {
    background-color: ${props => props.theme.primary ? rgba(props.theme.primary, 0.2) : '#e2e2e2'};
    & svg {
      fill: ${props => props.theme.primary ? rgba(props.theme.primary, 0.4) : 'white'};
    }
  }
	&[disabled] {
		opacity: 0.35;
		cursor: default;
	}
`;

const BrandBage = ({...props}) => (
    <Badge onClick={props.onClick} >
      <Icon symbol="logo" size="medium"/>
    </Badge>
);

export default BrandBage;
