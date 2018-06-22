import React from 'react';
import { Upload, Icon } from 'antd';
// import PropTypes from 'prop-types';

const { Dragger } = Upload;

function DragUploader(props) {
    const {
        action,
        uploadText,
        uploadHint,
    } = props;
    return (
        <Dragger
            name="file"
            multiple
            action={action}
            beforeUpload={props.beforeUpload}
            onChange={props.handleUpload}
            // showUploadList={false}
        >
            <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">{uploadText}</p>
            <p className="ant-upload-hint">{uploadHint}</p>
        </Dragger>
    );
}

export default DragUploader;
