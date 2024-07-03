"use client";
import React from "react";
import UsersCaregiversPieChart from "../caregiverPie/page";
import AcceptedRejectedCaregiversPieChart from "../caregiversAccORejPie/page";

export default function PieCharts() {
  return (
    <div>
      <h1 className="text-center pt-4 text-2xl italic font-semibold underline">
        Caregiver Pie charts
      </h1>
      <div className="pie-chart-container pt-5 pb-10 px-1">
        <div className="pie-chart-item">
          <UsersCaregiversPieChart />
        </div>
        <div className="pie-chart-item">
          <AcceptedRejectedCaregiversPieChart />
        </div>
      </div>
    </div>
  );
}
