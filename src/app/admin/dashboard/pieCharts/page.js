"use client";
import React from "react";
import GroupStatusPieChart from "../groupAccORejPie/page";
import GroupMembersPieChart from "../groupMemPie/page";

export default function PieCharts() {
  return (
    <div>
      <h1 className="text-center pt-4 text-2xl italic font-semibold underline">
        Group Pie charts
      </h1>
      <div className="pie-chart-container pt-5 pb-10 px-1">
        <div className="pie-chart-item">
          <GroupStatusPieChart />
        </div>
        <div className="pie-chart-item">
          <GroupMembersPieChart />
        </div>
      </div>
    </div>
  );
}
