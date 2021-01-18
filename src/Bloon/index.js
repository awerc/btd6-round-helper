import React, {useState, useEffect} from 'react';

import branch from '../branch';
import Tooltip from '../Tooltip/index';
import './style.scss';

const Bloon = ({data}) => {
    const {name, count, mods} = data || {};

    let type = name;
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

    const tooltip = [name, ...(mods || [])].join(' ').replace(/\b\w/g, l => l.toUpperCase());

    if (!image) {
        return null;
    }

    return (
        <Tooltip text={tooltip}>
            <div className="bloon">
                <img className="icon" src={image} alt={name} />
                {count && <span className="fancy-text count">{count}</span>}
            </div>
        </Tooltip>
    );
};

export default branch(({data}) => !!data, Bloon);
