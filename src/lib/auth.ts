import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import Credentials from "next-auth/providers/credentials";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma) as Adapter,
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "enter your email",
        },
        password: {
          label: "Pasword",
          type: "password",
          placeholder: "********",
        },
      },
      authorize: async (credentials, req) => {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (
          credentials?.email === user?.email &&
          credentials?.password === user?.password
        ) {
          return user;
        }
        return null as any;
      },
    }),
  ],
};
