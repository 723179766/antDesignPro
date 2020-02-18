import React from 'react';
import { Button } from 'antd';
import { router } from 'umi';
import classNames from 'classnames';
import LoginHeader from '@/components/LoginHeader';
import styles from './index.less'
import { loginAdmin1, loginAdmin2, adminLogin } from '@/services/login';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  loginRole1 = () => {
    loginAdmin1().then(res => {
      router.push('/admin/dashboard');
    })
  };

  loginRole2 = () => {
    loginAdmin2().then(res => {
      router.push('/admin/dashboard');
    })
  };

  loginAdmin = () => {
    adminLogin().then(res => {
      router.push('/admin/dashboard');
    })
  };

  render() {
    return (
      <div className={classNames('cpau-login', styles.login)}>
        <LoginHeader />
        <div className={styles.loginContent}>
          <div className={styles.formWarp}>
            <h1>登录页面</h1>
            <Button type="primary" onClick={() => router.push('/register')}>注册页面</Button>
            <p></p>
            <Button type="primary" onClick={this.loginRole1}>角色1登录</Button>
            <p></p>
            <Button type="primary" onClick={this.loginRole2}>角色2登录</Button>
            <p></p>
            <Button type="primary" onClick={this.loginAdmin}>管理员登录</Button>
            <p></p>
            <Button type="primary" className="cp-btn-primary">自定义按钮</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
