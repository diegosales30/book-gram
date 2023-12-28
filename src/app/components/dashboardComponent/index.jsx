"use client";
import { useLoggedContext } from "@/app/context/loginContext";
import { useRouter } from "next/navigation";
import Header from "../header";

function DashboardComponent() {
  
  return (
    <div>
      <Header />
    </div>
    
  )
}
export default DashboardComponent;