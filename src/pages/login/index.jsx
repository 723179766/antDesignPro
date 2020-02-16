import React from 'react';
import { Button } from 'antd';
import { router } from 'umi';
import classNames from 'classnames';
import LoginHeader from '@/components/LoginHeader';
import styles from './index.less'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className={classNames('cpau-login', styles.login)}>
        <LoginHeader />
        <div className={styles.loginContent}>
          <div className={styles.formWarp}>
            <h1>登录页面</h1>
            <Button type="primary" onClick={() => router.push('/register')}>注册页面</Button>
            <p></p>
            <Button type="primary" onClick={() => router.push('/admin/welcome')}>管理员1登录</Button>
            <p></p>
            <Button type="primary" onClick={() => router.push('/admin/welcome')}>管理员2登录</Button>
            <p></p>
            <Button type="primary" className="cp-btn-primary">自定义按钮</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
