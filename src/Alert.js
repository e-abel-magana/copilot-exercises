import React, { useState, useEffect } from 'react';
import AlertComponent from '@material-ui/lab/Alert';

function Alert({ message, type }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return open ? (
    <AlertComponent severity={type}>
      {message}
    </AlertComponent>
  ) : null;
}

export default Alert;