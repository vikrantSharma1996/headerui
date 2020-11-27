import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Burger from './Burger';
import {connect} from 'react-redux'

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 0px 10px 10px 10px;
  }
`

const Navbar = () => {
  return (
    <Nav className="nav-wrapper black darken-3">
      <div className="logo" style={{fontWeight:"bold"}}>
      <Link to='/' className="brand-logo">Protien bar and kitchen</Link>
      </div>
      <Burger />
    </Nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return{
    // auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar)