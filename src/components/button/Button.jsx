import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


//import './Button.css';

const NiceButton = styled.button`
	padding: .5em 1.5em;
	background-color: #fff;
	border: 1px solid currentColor;
	border-radius: .3em;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	color: ${props => props.theme.primary};
	&[disabled] {
		opacity: 0.35;
		cursor: default;
	}
`;

/**
 * The only true button.
 */
export default function Button({ size, onClick, disabled, children }) {
	const styles = {
		fontSize: Button.sizes[size],
	};

	return (
		<NiceButton style={styles} onClick={onClick} disabled={disabled}>
			{children}
		</NiceButton>
	);
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	size: PropTypes.oneOf(['small', 'normal', 'large']),
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	color: '#333',
	size: 'normal',
	onClick: event => {
		// eslint-disable-next-line no-console
		console.log('You have clicked me!', event.target);
	},
};

Button.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px',
};
