import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({
  children,
  to,
  href,
  primary = false,
  secondary = false,
  download = false,
  onClick,
  className = '',
  ...props
}) => {
  const baseClasses = "inline-flex items-center px-6 py-3 font-medium rounded transition duration-300";
  const primaryClasses = "bg-gradient-to-bl from-primary to-blue-700 text-white py-20 shadow-xl hover:bg-primaryDark";
  const secondaryClasses = "border border-primary text-primary hover:bg-gradient-to-bl from-primary to-blue-700 hover:text-white py-20";

  const buttonClasses = `${baseClasses} ${primary ? primaryClasses : ''} ${secondary ? secondaryClasses : ''} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.92 },
    transition: { type: "spring", stiffness: 500 },
  };

  // Internal link
  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link to={to} className={buttonClasses} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  // External link or download
  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        download={download}
        target={!download ? "_blank" : undefined}
        rel={!download ? "noopener noreferrer" : undefined}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  // Regular button
  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
