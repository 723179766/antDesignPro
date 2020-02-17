import React from 'react';
import { connect } from 'dva';
import LayoutMenu from '@/components/LayoutMenu';
import styles from './BasicLayout.less'

class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div className={styles.basicLayout}>
        <div className={styles.basicLayoutLeft}>
          <LayoutMenu />
        </div>
        <div className={styles.basicLayoutRight}>
          <div className={styles.basicLayoutHeader}>
            头部
          </div>
          <div className={styles.basicLayoutMain}>
            <div className={styles.mainNav}>
              用户管理
            </div>
            <div className={styles.mainContent}>
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({ global, settings }) => ({
  collapsed: global.collapsed,
  settings,
}))(BasicLayout);
