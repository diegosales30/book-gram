"use client";

import { useEffect, useState } from "react";
import FooterComponent from "../footerComponent";
import Header from "../header";
import MainComponent from "../mainComponent";
import { useRouter } from "next/navigation";

function DashboardComponent() {
  const [token, setToken] = useState();
  const route = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      route.push("/dashboard");
      setToken(token);
    }
    if (!token) {
      route.push("/");
    }
  }, []);

  return (
    <>
      {token && (
        <>
          <Header />
          <MainComponent />
          <FooterComponent />
        </>
      )}
    </>
  );
}
export default DashboardComponent;
