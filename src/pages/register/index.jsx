import React from 'react';
import { Button } from 'antd';
import { router } from 'umi';

const Register = () => {
  return (
    <div>
      <h1>我是注册</h1>
      <Button type="primary" onClick={() => router.push('/login')}>
        返回登录
      </Button>
    </div>
  );
};

export default Register;
