import React from 'react';

const SchemeBlock = ({ scheme }) => {
  return (
    <div className="scheme-block">
      <h2>{scheme.heading}</h2>
      <p>{scheme.description}</p>
      <p><strong>Last Date:</strong> {scheme.lastDate}</p>
    </div>
  );
};

export default SchemeBlock;
