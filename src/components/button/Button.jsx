import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PrimaryButton = styled.button`
	padding: .5em 1.5em;
	background-color: #fff;
	border: 1px solid currentColor;
	border-radius: .3em;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	height: 28px;
	color: ${props => props.theme.primary};
	&[disabled] {
		opacity: 0.35;
		cursor: default;
	}
`;

export default function Button({ size, onClick, disabled, children }) {

	return (
		<PrimaryButton onClick={onClick} disabled={disabled}>
			{children}
		</PrimaryButton>
	);
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	size: PropTypes.oneOf(['small', 'normal', 'large']),
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	size: 'normal',
	onClick: event => {
		// eslint-disable-next-line no-console
		console.log('You have clicked me!', event.target);
	},
};
