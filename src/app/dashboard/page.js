"use client";
import { useRouter } from "next/navigation";
import DashboardComponent from "../components/dashboardComponent";
import { useLoggedContext } from "../context/loginContext";

function Dashboard() {
  const { logged } = useLoggedContext();
  const route = useRouter();

  if(!logged) route.push("/");
  if(logged) return <DashboardComponent />

}
export default Dashboard;