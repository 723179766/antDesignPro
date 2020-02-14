import React from 'react';
import { Button } from 'antd';
import { router } from 'umi';

const Login = () => {
  return (
    <div>
      <h1>登录页面</h1>
      <Button type="primary" onClick={() => router.push('/register')}>
        去注册
      </Button>
      <br/>
      <Button type="primary" onClick={() => router.push('/admin/welcome')}>
        管理后台
      </Button>
    </div>
  );
};

export default Login;
