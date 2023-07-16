"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

function Page() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated: () => {
      redirect("/unauthenticated");
    },
  });
  return <div>Authenticated CSR</div>;
}

export default Page;
