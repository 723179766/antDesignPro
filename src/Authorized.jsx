import React from 'react';
import { Redirect } from 'umi';
import { connect } from 'dva';

const url = window.location.pathname.split('/');
const targetAuth = url[url.length - 1];
let pageAuth = {};

class Authorized extends React.Component {
  render() {
    const { children, userPageAuth } = this.props;
    log('Authorized', userPageAuth[targetAuth])

    return (
      <>
        {children}
      </>
    );
  }
}

Authorized.getAuth = () => {
  log('pageAuth', pageAuth[targetAuth])
  return true
}

export default connect(({ user }) => {
  pageAuth = user.userPageAuth
  return {
    userPageAuth: user.userPageAuth
  }
})(Authorized);
