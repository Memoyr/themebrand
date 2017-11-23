import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 90px;
  height: 34px;
`;

const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`;

const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  transition: .4s;

  cursor: pointer;
  background-color: #ccc;
  border-radius: ${p => p.round ? 34 : 0};

  ${Checkbox}:checked + & {
    background-color: #3B97D3;
  }

  ${Checkbox}:focus + & {
    box-shadow: 0 0 1px #3B97D3;
  }

  &:before {
    position: absolute;
    content: "";
    left: 4px;
    bottom: 4px;

    transition: .4s;

    height: 26px;
    width: 26px;
    background-color: white;
    border-radius: ${p => p.round ? '50%' : '0'};

    ${Checkbox}:checked + & {
      transform: translateX(56px);
    }
  }
`;

const Demo = ({ round }) => (
  <Wrapper>
    <Checkbox />
    <Slider round={round} />
  </Wrapper>
);

export default Demo;
