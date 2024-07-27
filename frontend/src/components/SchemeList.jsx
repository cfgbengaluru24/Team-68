import React from 'react';
import SchemeBlock from './SchemeBlock';

const SchemeList = ({ schemes }) => {
  if (schemes.length === 0) {
    return <p>No schemes found.</p>;
  }

  return (
    <div className="scheme-list">
      {schemes.map((scheme) => (
        <SchemeBlock key={scheme.id} scheme={scheme} />
      ))}
    </div>
  );
};

export default SchemeList;
