'use strict';
const path = require('path');
const formidable = require('formidable');

// 0：图片
// 1：构建
// 2-5：其他资源

const getUploader = (req, { file_type, file_right = 1, collection }) => {
  const form = new formidable.IncomingForm();
  form.keepExtensions = true;

  // 公有资源路径
  let uploadPath = '../public/resource/' + collection;

  if (file_type === 0) {
    uploadPath = '../public/images/upload';
    form.maxFileSize = 5 * 1024 * 1024; // 图片最大为5M
  } else if (file_type === 1) {
    uploadPath = '../public/build' + collection;
  } else if (file_right === 0) { // 私有资源路径，只能在登录状态下被该用户下载访问
    uploadPath = '../../resource/' + collection;
  }

  form.uploadDir = path.resolve(__dirname, uploadPath);

  form.parse = form.parse.bind(form, req);

  form.parseAsync = function() {
    return new Promise(resolve => {
      form.parse((error, fields, { file }) => resolve({
        error,
        fields,
        file,
      })
      );
    });
  };

  return form;
};

module.exports = getUploader;
