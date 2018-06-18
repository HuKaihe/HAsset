import React, { Component } from 'react';
import { message, Affix, BackTop } from 'antd';

// 公共模块
import TopBar from '../../common/TopBar/TopBar';
import DragUploader from '../../common/DragUploader/DragUploader';

// 私有模块
import ImageGallery from './ImageGallery';

import { deepCloneObj, post } from '../../service/service';


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
                        uploadHint="图片最大体积为5M；注意，在此处图片上传后全网可见，不可删除，请勿上传任何机密图片"
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
