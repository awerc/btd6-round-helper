import React, {useEffect, useState} from 'react';
import cn from 'classnames';

import './style.scss';

const Key = ({letter, mods = [], tower, render, title}) => {
    const [image, setImage] = useState(null);
    useEffect(() => {
        if (!tower) return;

        const img = tower.toLowerCase().replace(' ', '_');

        import(`../bloons/${img}.png`)
            .then(image => setImage(image?.default))
            .catch(() => {
                setImage('');
                console.log('not found', img);
            });
    }, [tower]);

    return (
        <div title={title || letter} data-key={letter} className={cn('key', mods)}>
            {image && <img className="icon" src={image} alt="" />}
            {render && render()}
        </div>
    );
};

export default Key;
