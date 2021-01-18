import React, {useState} from 'react';
import cn from 'classnames';

import './style.scss';

const Tooltip = ({to = 'right', text, children}) => {
    const [isHovered, setState] = useState(false);

    return (
        <div className="tooltip" onMouseEnter={() => setState(true)} onMouseLeave={() => setState(false)}>
            {children}
            {isHovered && (
                <div className={cn('container', to)}>
                    <span className="arrow" />
                    {text}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
