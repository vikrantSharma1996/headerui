import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 0px 10px 10px 10px ;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul className="right" open={open} style={{fontWeight:"bold"}}>
      <li><NavLink to='/'>MENU</NavLink></li>
      <li><NavLink to='/'>STORY</NavLink></li>
      <li><NavLink to='/'>CATERING</NavLink></li>
      <li><NavLink to='/'>REWARDS</NavLink></li>
      <li><NavLink to='/'>DONATE</NavLink></li>
      <li><NavLink to='/login'>LOGIN</NavLink></li>
    </Ul>
  )
}

export default RightNav