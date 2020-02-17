import React from 'react';
import { Menu } from 'antd';
import { router } from 'umi';
import styles from './index.less'

const { SubMenu } = Menu;

class LayoutMenu extends React.Component {
  state = {
    menu: []
  };

  componentWillMount() {
    const [{ route }, menu] = [this.props, []];
    route.routes.forEach(val => {
      if (val.path && val.name) {
        menu.push({
          name: val.name,
          path: val.path,
          children: []
        });
        if (val.routes && val.routes.length > 0) {
        }
      }
    });
    console.log('LayoutMenu this.props', route.routes);
    console.log('menu', menu);
  }

  render() {
    return (
      <div className={styles.layoutMenu}>
        <div className={styles.logo}>LOGO</div>
        <Menu mode="inline">
          <SubMenu key="sub1" title={<span>Navigation One</span>}>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span>Navigation Two</span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span>Navigation Three</span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default LayoutMenu;
