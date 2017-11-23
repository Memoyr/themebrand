import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon/Icon.jsx';
import { rgba } from 'polished';


const Badge = styled.button`
	padding: 5px;
	background-color: ${props => rgba(props.theme.primary, 0.4)};
	border: transparent;
	border-radius: 3px;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	color: 'transparent';
  &:hover {
    background-color: ${props => rgba(props.theme.primary, 0.2)};
    & svg {
      fill: rgba(255,255,255, 0.8);
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
