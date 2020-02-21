import React from 'react';
import { connect } from 'dva';

let pageAuth = {};
const url = window.location.pathname.split('/');
const targetPage = url[url.length - 1];

const renderAuthorized = (paramsAuth, userPageAuth) => {
  if (typeof paramsAuth !== 'object' || !(paramsAuth instanceof Array)) {
    return false;
  }
  const validateAuth = userPageAuth || pageAuth[targetPage];
  let res = false;
  try{
    paramsAuth.forEach(val => {
      if (validateAuth.includes(val)) {
        res = true;
        throw new Error('end')
      }
    })
  } catch (e) {
  }
  return res
};

class Authorized extends React.Component {
  renderChild = () => {
    const { children, paramsAuth, userPageAuth } = this.props;
    const res = renderAuthorized(paramsAuth, userPageAuth[targetPage]) || false;
    if (res) return children;
    return null
  };

  render() {
    return (
      <>
        {this.renderChild()}
      </>
    );
  }
}

Authorized.getAuths = () => {
  return pageAuth[targetPage] === undefined ? [] : pageAuth[targetPage]
};

Authorized.renderAuthorized = renderAuthorized;

export default connect(({ user }) => {
  pageAuth = user.userPageAuth;
  return {
    userPageAuth: user.userPageAuth
  }
})(Authorized);
