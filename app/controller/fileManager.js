'use strict';

const Controller = require('egg').Controller;
const path = require('path');
// const fs = require('fs');

const getUploader = require('../model/uploader');

const rootDir = path.resolve(__dirname, '../');

class fileManagerController extends Controller {
  async uploadImage() {
    const ctx = this.ctx;
    const form = getUploader(ctx.req, {
      file_type: 0, // web图片
    });
    const {
      error,
      file,
    } = await form.parseAsync() || {};
    if (error) {
      ctx.body = {
        code: 500,
        msg: '上传失败',
      };
      return;
    }
    const file_url = file.path.replace(rootDir, '');
    await ctx.service.fileManager.addNewImage({
      user_id: 10001,
      file_name: file.name,
      file_type: 0,
      file_size: file.size,
      file_or_url: file_url,
      file_ug_url: file_url,
      upload_time: new Date(),
    });
    const imageList = await ctx.service.fileManager.getImageList();
    ctx.body = {
      code: 200,
      payload: {
        imageList,
      },
    };
  }

  async deleteFile() {
    const { ctx } = this;
    const { file_id } = ctx.request.body;
    const result = await ctx.service.fileManager.deleteFile(file_id);
    if (!result) {
      ctx.body = {
        code: 300,
        msg: '删除失败',
      };
    }
    const imageList = await ctx.service.fileManager.getImageList();
    ctx.body = {
      code: 200,
      payload: {
        imageList,
      },
    };
  }
}

module.exports = fileManagerController;
