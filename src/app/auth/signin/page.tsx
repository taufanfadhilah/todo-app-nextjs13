import { Metadata } from "next";
import Link from "next/link";

import { UserAuthForm } from "./user-auth-form";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="container hidden flex-col justify-center md:grid">
        <div className="lg:p-8">
          <div className="flex flex-col sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Hi, welcome!
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to sign in your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground mt-2">
              Do not have an account yet?{" "}
              <Link
                href="/auth/signup"
                className="underline underline-offset-4 hover:text-primary"
              >
                register here
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
