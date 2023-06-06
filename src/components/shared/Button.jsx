import React from "react";

export default function Button({ loading, text, style }) {
  return (
    <button
      disabled={loading}
      type="submit"
      className={`px-6 border border-primary py-1 text-primary dark:border-secondary dark:text-secondary dark:hover:bg-secondary dark:hover:text-white hover:bg-primary hover:text-white rounded transition-all duration-200 ${style}`}
    >
      <div className="flex items-center justify-center">
        {loading ? (
          <span className="border h-6 w-6 border-white animate-spin rounded-full"></span>
        ) : (
          <span>{text}</span>
        )}
      </div>
    </button>
  );
}
