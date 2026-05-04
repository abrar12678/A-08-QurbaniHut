"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const ProtectedRoute = ({ children }) => {
  const session = authClient.useSession();
  const user = session.data?.user;

  if (!user) {
    redirect("/signin");
  }

  return children;
};

export default ProtectedRoute;
