import React, { useState, useEffect } from "react";
import AlertComponent from "@mui/material/Alert";

function Alert({ message, type, clear = true }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (clear) setOpen(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return open ? (
    <AlertComponent severity={type}>{message}</AlertComponent>
  ) : null;
}

export default Alert;
