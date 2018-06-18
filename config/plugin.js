'use strict';

// had enabled by egg
// exports.static = true;
exports.handlebars = {
  enable: true,
  package: 'egg-view-handlebars',
};

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
