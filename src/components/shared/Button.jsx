import React from "react";

export default function Button({ loading, text, style, onClickHandler }) {
  return (
    <button
      onClick={onClickHandler}
      className={`px-8 bg-primary py-2 font-semibold text-white dark:border-white dark:hover:bg-white dark:hover:text-primary hover:bg-primary hover:text-white transition-all duration-200 ${style}`}
    >
      <div className="flex items-center justify-center">
        {loading ? (
          <span className="border h-6 w-6 border-primary animate-spin rounded-full"></span>
        ) : (
          <span>{text}</span>
        )}
      </div>
    </button>
  );
}
