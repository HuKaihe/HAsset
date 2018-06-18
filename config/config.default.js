'use strict';
const { mysql } = require('./.config');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1529058843197_6565';

  // add your config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'handlebars',
    mapping: {
      '.hbs': 'handlebars',
      '.nj': 'nunjucks',
    },
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: mysql.host,
      // 端口号
      port: mysql.port,
      // 用户名
      user: mysql.user,
      // 密码
      password: mysql.password,
      // 数据库名
      database: mysql.database,
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  return config;
};
