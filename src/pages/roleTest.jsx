import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { router } from 'umi';
import Authorized from '@/Authorized';

const { getAuths, renderAuthorized } = Authorized;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>
);

class roleTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ss: renderAuthorized(['btn3'])
    }
  }

  componentDidMount() {
    log('getAuths()', getAuths());
    log('renderAuthorized', renderAuthorized(['btn3']))
  }

  render() {
    const { ss } = this.state;
    log (renderAuthorized(['btn3']), '22')
    log (ss, 'ss')

    return (
      <div>
        <Authorized paramsAuth={['btn1']}>
          <Button style={{ marginRight: 7 }} type="primary">按钮一</Button>
        </Authorized>
        <Authorized paramsAuth={['btn2']}>
          <Button style={{ marginRight: 7 }} type="primary">按钮二</Button>
        </Authorized>
        <Authorized paramsAuth={['btn3']}>
          <Button style={{ marginRight: 7 }} type="primary">按钮三</Button>
        </Authorized>
        {renderAuthorized['btn4'] && (
          <Button style={{ marginRight: 7 }} type="primary">按钮四</Button>
        )}
        <p style={{ marginTop: 20 }}>
          <Dropdown overlay={menu} placement="bottomCenter">
            <Button className="cp-btn-primary">操作菜单</Button>
          </Dropdown>
        </p>
        <p style={{ marginTop: 20 }}>
          <Button type="primary" onClick={() => router.push('/login')}>返回登录</Button>
        </p>
      </div>
    );
  }
}

export default roleTest;
