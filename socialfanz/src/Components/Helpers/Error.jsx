import React from 'react';

const Error = ({ error }) => {
    if (!error) return null;
    return <p style={{ color: '#f31', margin: '1rem 0', textAlign: 'center', fontSize: '1.5rem' }}>{error}</p>;
};

export default Error;
