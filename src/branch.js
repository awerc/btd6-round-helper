import React from 'react';

const branch = (condition, Comp) => props => (condition(props) ? <Comp {...props} /> : null);

export default branch;
