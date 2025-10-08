// src/components/common/Input.jsx
import React from "react";
import clsx from "clsx";

export const Input = React.forwardRef(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={clsx(
            "w-full px-3 py-2 border rounded-lg transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-blue-500",
            "bg-white dark:bg-gray-800",
            "text-gray-900 dark:text-white",
            "placeholder-gray-400 dark:placeholder-gray-500",
            error
              ? "border-red-500 dark:border-red-400"
              : "border-gray-300 dark:border-gray-600",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
