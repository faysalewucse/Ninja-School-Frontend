import React from "react";

export default function ButtonOutline({ text, style, onClickHandler }) {
  return (
    <button
      onClick={onClickHandler}
      className={`px-6 border border-primary py-1 text-primary dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary hover:bg-primary hover:text-white rounded transition-all duration-200 ${style}`}
    >
      {text}
    </button>
  );
}
