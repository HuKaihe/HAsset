'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.imageAssetIndex);
  router.get('/build', controller.home.buildAssetIndex);
  router.get('/resource', controller.home.resourceAssetIndex);
  router.post('/uploadImage', controller.fileManager.uploadImage);
  router.post('/deleteFile', controller.fileManager.deleteFile);
};
