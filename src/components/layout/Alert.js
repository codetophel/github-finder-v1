import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i class='fa-solid fa-circle-info'>{alert.msg}</i>
      </div>
    )
  );
};
export default Alert;
