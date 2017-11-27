import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputField = styled.input`
    background-color: white;
    display: "block";
    border-bottom: #e4e4e4 solid 1px;
    border-width: 0 0 1px 0;
    height: 26px;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.5;
    min-height: 26px;
    padding: 0.2rem 0px 0.2rem;
    transition: backgroundColor 200ms, border-bottom-color 200ms, color 200ms;
    width: 100%;
    flex: 0 0 auto;

    &:focus {
      border-bottom-color: ${props => props.theme.primary ? props.theme.primary : 'black'};
      outline: none;
    }
`;

const Input = (props) => {
  const { innerRef,  ...attributes } = props;

  return (
    <InputField {...attributes} ref={innerRef} type="text" />
  );
};

Input.propTypes = {
  innerRef: PropTypes.func,
};

Input.defaultProps = {
  type: "text",
  innerRef: null,
};


export default Input;
