import React from "react";

export const DashboardCard = ({ number, title }) => {
  return (
    <div className="bg-gradient-to-bl shadow-xl from-slate-700 to-primary bg-opacity-80 px-5 py-8 text-center text-white rounded-xl">
      <h1 className="font-bold text-7xl">{number}</h1>
      <h1 className="font-semibold text-xl">{title}</h1>
    </div>
  );
};
