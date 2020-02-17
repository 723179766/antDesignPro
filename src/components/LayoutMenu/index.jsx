import React from 'react';
import { Menu } from 'antd';
import { router } from 'umi';
import { formatMessage } from 'umi-plugin-react/locale';
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
          menu.forEach(cval => {
            if (cval.name === val.name) {
              val.routes.forEach(child => {
                if (child.path && child.name){
                  cval.children.push({
                    name: child.name,
                    path: child.path,
                    children: []
                  })
                }
              })
            }
          })
        }
      }
    });
    this.setState({menu});
    console.log('LayoutMenu this.props', route.routes);
    console.log('menu', menu);
  }

  getMenu = (val) => {
    if (val.children.length > 0) {
      return (
        <SubMenu key={val.path} title={<span>{formatMessage({id: val.name})}</span>}>
          {val.children.map(cval => this.getMenu(cval))}
        </SubMenu>
      )
    }
    return (
      <Menu.Item key={val.path}>
        <span>{formatMessage({id: val.name})}</span>
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
          {menu.map(val => this.getMenu(val))}
        </Menu>
      </div>
    );
  }
}

export default LayoutMenu;
