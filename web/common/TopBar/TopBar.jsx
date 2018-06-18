import React from 'react';
import './topBar.less';

function TopBar(props) {
    return (
        <div className="hasset-top-bar">
            <div className="app-title">
                        HAsset
                <div className="decorate-gif" />
            </div>
            <div className="top-right">
                <ul className="global-nav">
                    <li className="active">
                        <a href="/" target="_blank">
                            图片
                        </a>
                    </li>
                    <li>
                        <a href="/build" target="_blank">
                            构建
                        </a>
                    </li>
                    <li>
                        <a href="/resource" target="_blank">
                            资源
                        </a>
                    </li>
                </ul>
                <div
                    className="user-profile"
                    style={{
                        backgroundImage: `url(${props.user.profile})`,
                    }}
                />
            </div>
        </div>
    );
}

export default TopBar;
