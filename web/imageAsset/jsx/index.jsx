import React, { Component } from 'react';
import { message, Affix, BackTop } from 'antd';

// 公共模块
import TopBar from '../../common/TopBar/TopBar';
import DragUploader from '../../common/DragUploader/DragUploader';

// 私有模块
import ImageGallery from './ImageGallery';

import { deepCloneObj, post } from '../../service/service';
import imageType from '../../config/imageType';

class HAsset extends Component {
    static propTypes = {}
    static defaultProps = {}
    state = {
        imageList: deepCloneObj(window.imageList || []),
        user: {
            profile: '/public/images/user_profile/profile_1.png',
            user_id: '10001',
            user_name: '恩言',
        },
    }

    beforeUpload = (file) => {
        const validType = imageType.indexOf(file.type) !== -1;
        if (!validType) {
            message.error('这里只能上传图片资源，支持的格式有jpg/jpeg、png、gif');
            return false;
        }
        const isLt5M = file.size / 1024 / 1024 < 5;
        if (!isLt5M) {
            message.error('图片体积最大为5MB');
            return false;
        }
        return true;
    }

    handleUpload = (info) => {
        const { status, response } = info.file;
        if (status === 'error') {
            message.error('删除成功');
            return;
        }
        if (status === 'done') {
            const { payload } = response;
            message.success('上传成功');
            const { imageList } = payload;
            this.setState({
                imageList,
            });
        }
    }

    removeFile = async (file_id) => {
        const { code, payload } = await post('/deleteFile', { file_id });
        if (code === 200) {
            message.success('删除成功');
            const { imageList } = payload;
            this.setState({
                imageList,
            });
        }
    }

    render() {
        return (
            <div className="hasset-container">
                <TopBar
                    user={this.state.user}
                />
                <Affix>
                    <DragUploader
                        action="/uploadImage"
                        uploadText="轻点或拖拽以上传图片"
                        uploadHint="在此处图片上传后全网可见，不可删除，请勿上传任何机密图片"
                        beforeUpload={this.beforeUpload}
                        handleUpload={this.handleUpload}
                    />
                </Affix>

                {
                    this.state.imageList.length === 0 ?
                        <div className="null-image" /> :
                        <ImageGallery
                            imageList={this.state.imageList}
                            removeFile={this.removeFile}
                        />
                }
                <BackTop />
            </div>
        );
    }
}

export default HAsset;
