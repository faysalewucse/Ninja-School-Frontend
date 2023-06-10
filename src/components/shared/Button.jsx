import React from "react";
import { SpinnerText } from "./SpinnerText";

export default function Button({ loading, text, style, onClickHandler }) {
  return (
    <button
      onClick={onClickHandler}
      className={`px-8 bg-primary py-2 font-semibold text-white dark:border-white dark:hover:bg-white dark:hover:text-primary hover:bg-primary hover:text-white transition-all duration-200 ${style}`}
    >
      <SpinnerText text={text} loading={loading} />
    </button>
  );
}
