"use client";
import { useLoggedContext } from "@/app/context/loginContext";
import { useRouter } from "next/navigation";

function DashboardComponent() {
  const { logged, setLogged } = useLoggedContext();
  const route = useRouter();

  const handleLogout = () => {
    setLogged(false);
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is the Dashboard</p>
      <button onClick={handleLogout}>sair</button>
    </div>
    
  )
}
export default DashboardComponent;