import React from 'react';
import { Icon, Modal } from 'antd';

function ImageGallery(props) {
    const removeImage = (file_id) => {
        Modal.confirm({
            title: '确认要删除该图片吗？',
            content: '将图片从列表中删除，该图片仍然可以在服务器上被访问到',
            onOk: () => {
                props.removeFile(file_id);
            },
            okText: '确定删除',
            okType: 'danger',
            cancelText: '取消',
        });
    };
    return (
        <ul className="image-gallery" onDrop={() => false}>
            {
                props.imageList.map(i => (
                    <li key={i.file_id}>
                        <div className="card animated flipInX">
                            <button
                                className="remove-image"
                                onClick={() => removeImage(i.file_id)}
                            >
                                <Icon type="close" />
                            </button>
                            <div className="image-bg" >
                                <img src={i.file_ug_url || i.file_or_url} alt={i.file_name} />
                            </div>
                            <ul className="card-operate">
                                <li>
                                    <button>
                                        复制图片链接
                                    </button>
                                </li>
                                <li>
                                    <a href={i.file_or_url || i.file_ug_url} target="_blank" rel="noopener noreferrer">
                                         查看图片
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}

ImageGallery.propTypes = {};
ImageGallery.defaultProps = {};
export default ImageGallery;
