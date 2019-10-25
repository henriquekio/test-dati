import React from 'react';

function ValidateMessage(props) {
  const { errorMessage = [] } = props;
  let errors = '';
  errorMessage.forEach(item => {
    errors += `${item} `;
  });
  return (
    <span className="helper-text">{errors}</span>
  );
}

export default ValidateMessage;

