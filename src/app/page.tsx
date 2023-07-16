import React from "react";
import { getServerSession } from "next-auth";

// components
import { Separator } from "@/components/ui/separator";
import TodoForm from "@/components/TodoForm";
import TodoLists from "@/components/TodoLists";

// lib
import { authOptions } from "@/lib/auth";
import SignOutButton from "@/components/SignOutButton";

async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <div className="flex justify-between">
        <p className="title">Todo Apps by Nextjs 13 - {session?.user?.name}</p>
        <SignOutButton />
      </div>
      <Separator className="my-4" />
      <div className="flex flex-row gap-6">
        <TodoForm />
        <div className="flex-1">
          <TodoLists />
        </div>
      </div>
    </div>
  );
}

export default Home;
