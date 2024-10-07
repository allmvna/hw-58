import React from "react";
import { motion } from "framer-motion";

interface AlertProps extends React.PropsWithChildren {
  type: "success" | "warning" | "danger" | "primary";
  onDismiss?: () => void;
  clickDismissable?: boolean;
}

const Alert: React.FC<AlertProps> = ({
  type,
  onDismiss,
  children,
  clickDismissable,
}) => {

  const alertStyle = `alert alert-${type}`;

  return (
    <>
      <motion.div
        className={alertStyle}
        role="alert"
        onClick={clickDismissable ? onDismiss : undefined}
        style={{
          width: "75%",
          maxWidth: "500px",
          margin: "0 auto",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0 }}
      >
        {children}
        {!clickDismissable && onDismiss && (
          <button
            type="button"
            className="btn-close"
            onClick={onDismiss}
          ></button>
        )}
      </motion.div>
    </>
  );
};

export default Alert;
