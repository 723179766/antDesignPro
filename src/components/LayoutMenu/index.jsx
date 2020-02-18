import React from 'react';
import { Menu } from 'antd';
import { router } from 'umi';
import { formatMessage } from 'umi-plugin-react/locale';
import styles from './index.less'

const { SubMenu } = Menu;

class LayoutMenu extends React.Component {
  state = {
    umiRoutes: [],
    menu: [],
  };

  componentWillMount() {
    const [{ route }, menu] = [this.props, []];
    const routes = route.routes;
    this.createMenuData(routes, menu);
    this.setState({menu});
    console.log('routes', routes);
    console.log('menu', menu);
  }

  createMenuData = (routes, menu) => {
    routes.forEach(val => {
      if (val.path && val.name && val.label) {
        menu.push({
          label: val.label,
          name: val.name,
          path: val.path,
          children: []
        });
        if (val.routes && val.routes.length > 0) {
          this.createMenuData(val.routes, menu[menu.length - 1].children)
        }
      }
    });
  };

  menuNode = (val) => {
    if (val.children.length > 0) {
      return (
        <SubMenu key={val.path} title={<span>{formatMessage({id: val.label})}</span>}>
          {val.children.map(cval => this.menuNode(cval))}
        </SubMenu>
      )
    }
    return (
      <Menu.Item key={val.path}>
        <span>{formatMessage({id: val.label})}</span>
      </Menu.Item>
    )
  };

  menuClick = (params) => {
    const { keyPath } = params;
    router.push(keyPath[0]);
  };

  render() {
    const { menu } = this.state;

    return (
      <div className={styles.layoutMenu}>
        <div className={styles.logo}>LOGO</div>
        <Menu mode="inline" onClick={this.menuClick}>
          {menu.map(val => this.menuNode(val))}
        </Menu>
      </div>
    );
  }
}

export default LayoutMenu;
