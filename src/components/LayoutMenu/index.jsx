import React from 'react';
import { Menu, Icon } from 'antd';
import { router } from 'umi';
import styles from './index.less'

const { SubMenu } = Menu;

class LayoutMenu extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1']
  };

  componentDidMount() {
    console.log('LayoutMenu this.props', this.props)
  }

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  render() {
    return (
      <div className={styles.layoutMenu}>
        <div className={styles.logo}>LOGO</div>
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ width: 256 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
            }
          >
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
              <Icon type="setting" />
              <span>Navigation Three</span>
            </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default LayoutMenu;
