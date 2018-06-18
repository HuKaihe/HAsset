'use strict';

const Service = require('egg').Service;

class fileManagerService extends Service {
  async getImageList(user_id = 10001) {
    const file_type = 0;
    const imageList = (await this.app.mysql.select('fileinfo', { where: { user_id, file_type }, orders: [[ 'upload_time', 'desc' ]] }));
    return imageList;
  }
  async addNewImage(newImageInfo) {
    const result = await this.app.mysql.insert('fileinfo', newImageInfo);
    return result.affectedRows !== 0;
  }
  async deleteFile(file_id) {
    const result = await this.app.mysql.delete('fileinfo', { file_id });
    return result.affectedRows !== 0;
  }
}

module.exports = fileManagerService;
