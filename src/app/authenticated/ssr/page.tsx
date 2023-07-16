import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const session = await getServerSession(authOptions);
  if (!session) {
    console.log("you are not authenticated");
    redirect("/");
  }
  return <div>Authenticated SSR Page</div>;
}

export default page;
