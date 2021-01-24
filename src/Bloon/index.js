import React, {useState, useEffect} from 'react';
import {Tooltip} from 'antd';

import branch from '../branch';
import './style.scss';
import {capitalize} from '../utils';

const Bloon = ({data, tooltip}) => {
    const {name, count, mods} = data || {};

    let type = name.replace(':', '').replace(/[ .]/g, '_');
    if (mods) type += `_${mods.join('_')}`;

    const [image, setImage] = useState(null);
    useEffect(() => {
        import(`../bloons/${type}.png`)
            .then(image => setImage(image?.default))
            .catch(() => {
                setImage('');
                console.log('not found', type);
            });
    }, [type]);

    if (!tooltip) {
        tooltip = capitalize([name, ...(mods || [])].join(' '));
    }

    if (!image) {
        return null;
    }

    return (
        <Tooltip placement="right" title={tooltip}>
            <div className="bloon">
                <img className="icon" src={image} alt={name} />
                {count && <span className="fancy-text count">{count}</span>}
            </div>
        </Tooltip>
    );
};

export default branch(({data}) => !!data, Bloon);
