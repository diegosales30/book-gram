"use client";

import DashboardComponent from "../components/dashboardComponent";

import { useStorageContext } from "../context/storageContext";

function Dashboard() {
  const { token } = useStorageContext();

  return <DashboardComponent />;
}
export default Dashboard;
