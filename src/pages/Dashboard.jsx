import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    log('11', this.props)
  }

  render() {
    return (
      <div>
        账户概览
      </div>
    );
  }
}

export default Dashboard;
