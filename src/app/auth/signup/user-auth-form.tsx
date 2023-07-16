"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RotateCw } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useRegisterMutation } from "@/services/auth";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type UserAuthForm = {
  name: string;
  email: string;
  password: string;
};

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
  })
  .required();

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { toast } = useToast();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserAuthForm>({
    resolver: yupResolver(schema),
  });

  const [registerMutation] = useRegisterMutation();

  const onSubmit = async (data: UserAuthForm) => {
    try {
      setIsLoading(true);

      const res = await registerMutation(data).unwrap();

      if (!res?.success) {
        return toast({
          variant: "destructive",
          title: "Sign Up Failed!",
          description: "Something went wrong",
        });
      }

      await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      router.push("/");
    } catch (error) {
      return toast({
        variant: "destructive",
        title: "Sign Up Failed!",
        description: "Something went wrong",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1 mt-2">
            <Label className="sr-only" htmlFor="name">
              Name
            </Label>
            <Input
              {...register("name")}
              error={errors.name?.message}
              placeholder="John Doe"
            />
          </div>
          <div className="grid gap-1 mt-2">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              {...register("email")}
              error={errors.email?.message}
              placeholder="name@example.com"
            />
          </div>
          <div className="grid gap-1 mt-2">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              {...register("password")}
              type="password"
              error={errors.password?.message}
              placeholder="******"
            />
          </div>
          <Button disabled={isLoading} className="mt-2">
            {isLoading && <RotateCw className="mr-2 h-4 w-4 animate-spin" />}
            Sign In with Email
          </Button>
        </div>
      </form>
    </div>
  );
}
