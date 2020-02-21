import React from 'react';
import Authorized from '@/Authorized';

const { getAuth } = Authorized

class Role1Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    log('getAuth', getAuth())
  }

  render() {
    return (
      <div>
        <Authorized authority="aaaa">
          角色1页面1
        </Authorized>
      </div>
    );
  }
}

export default Role1Page1;
