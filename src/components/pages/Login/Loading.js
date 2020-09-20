import React from 'react';
import Spin from 'antd/lib/spin';
import 'antd/lib/spin/style/index.css';
import './Loading.css';

const Loading = () => (
  <div className="container-loading">
    <Spin size="large" />
  </div>
);
export default Loading;
