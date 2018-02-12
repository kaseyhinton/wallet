// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  console.log(state);
  return {
    accounts: state.accounts
  };
}

export default connect(mapStateToProps)(Home);
