import React from 'react';
import Authorized from '@/Authorized';

const { getAuth } = Authorized

class Dashboard extends React.Component {
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
        <Authorized auth="aaaa">
          账户概览
        </Authorized>
      </div>
    );
  }
}

export default Dashboard;
