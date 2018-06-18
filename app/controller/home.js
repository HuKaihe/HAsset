'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async imageAssetIndex() {
    const { ctx } = this;
    const imageList = await ctx.service.fileManager.getImageList();
    await ctx.render('imageAsset.hbs', {
      imageList: JSON.stringify(imageList),
    });
  }
  async buildAssetIndex() {
    const { ctx } = this;
    await ctx.render('buildAsset.hbs');
  }
  async resourceAssetIndex() {
    const { ctx } = this;
    await ctx.render('resourceAsset.hbs');
  }
}

module.exports = HomeController;
