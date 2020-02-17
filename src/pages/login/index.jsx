import React from 'react';
import { Button } from 'antd';
import { router } from 'umi';
import classNames from 'classnames';
import LoginHeader from '@/components/LoginHeader';
import styles from './index.less'
import { loginAdmin1, loginAdmin2 } from '@/services/login';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  login1 = () => {
    loginAdmin1().then(res => {
      console.log('loginAdmin1', res);
      router.push('/admin/welcome');
    })
  };

  login2 = () => {
    loginAdmin2().then(res => {
      console.log('loginAdmin2', res);
      router.push('/admin/welcome');
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
            <Button type="primary" onClick={this.login1}>管理员1登录</Button>
            <p></p>
            <Button type="primary" onClick={this.login2}>管理员2登录</Button>
            <p></p>
            <Button type="primary" className="cp-btn-primary">自定义按钮</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
