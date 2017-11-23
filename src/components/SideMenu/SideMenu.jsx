import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon/Icon';

const Container = styled.div`
  color: #5d5d5d;
  padding: 1.5rem;
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 250px;
  height: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  transform: ${props => props.open ? 'translate3d(-250px, 0, 0)' : ''};
  overflow-y: auto;
  right: -250px;
  border-left: ${props => props.theme.primary} solid 1px;
  background-color: #dbdcdc;
`;

const CloseButton = styled.button`
  display: flex;
  margin-left: auto;
`;


const SideMenu = ({...props}) => (
  <Container open={props.open}>
    <CloseButton onClick={() => console.log('test')} >
      <Icon symbol="person_48px-bkg-light" />
    </CloseButton>
  </Container>
);



SideMenu.propTypes = {
  open: PropTypes.bool
};

export default SideMenu;
