import React from 'react';
import { Redirect } from 'umi';
import { connect } from 'dva';

class Authorized extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    const { children, auth } = this.props;
    log(this.props)

    return (
      <div>
        {children}
      </div>
    );
  }
}

Authorized.getAuth = () => {
  return true
}

export default connect(({ user }) => ({
  userPageAuth: user.userPageAuth
}))(Authorized);
