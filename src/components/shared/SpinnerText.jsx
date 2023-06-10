import { Loading } from "@nextui-org/react";
import React from "react";

export const SpinnerText = ({ text, loading }) => {
  return (
    <div className="flex items-center justify-center">
      {loading ? <Loading color="white" /> : <span>{text}</span>}
    </div>
  );
};
