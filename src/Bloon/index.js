import React, {useState, useEffect} from 'react';
import {Tooltip} from 'antd';

import branch from '../branch';
import './style.scss';
import {getTooltip} from '../utils';

const Bloon = ({data, size = 50}) => {
    const {name, count, mods} = data || {};

    let type = name?.replace(':', '').replace(/[ .]/g, '_');
    if (mods) type += `_${mods.sort().join('_')}`;

    const [image, setImage] = useState(null);
    useEffect(() => {
        import(`../bloons/${type}.png`)
            .then(image => setImage(image?.default))
            .catch(() => {
                setImage('');
                console.log('not found', type);
            });
    }, [type]);

    if (!image) {
        return null;
    }

    return (
        <Tooltip placement="right" title={getTooltip(data)}>
            <div className="bloon">
                <img className="icon" src={image} alt={name} height={size} />
                {count && (
                    <span className="fancy-text count" style={{fontSize: size / 2 - 3}}>
                        {count}
                    </span>
                )}
            </div>
        </Tooltip>
    );
};

export default branch(({data}) => !!data, Bloon);
