import React from 'react';
import { Input, Select } from 'antd';
import fileTypeList from '../../config/fileType';
import './resourceSearch.less';

const { Option } = Select;


function ResourceSearch() {
    return (
        <div className="resource-search">
            <Input placeholder="资源名" className="file-name-input" />
            <Select defaultValue={100} className="file-type-select">
                {
                    fileTypeList.map(i => (
                        <Option
                            key={i.file_type}
                            value={i.file_type}
                            title={i.text}
                        >{ i.text }
                        </Option>
                    ))
                }
            </Select>
        </div>
    );
}

ResourceSearch.propTypes = {};
ResourceSearch.defaultProps = {};
export default ResourceSearch;
