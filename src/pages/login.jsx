import { authClient } from "../../lib/auth_client";
import { useEnforceUnAuthenticated } from "../store/auth";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/lib/toast";

export default () => {
  useEnforceUnAuthenticated();

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const form = new FormData(e.target.closest("form"));
      const result = await authClient.signIn.email({
        email: form.get("email"),
        password: form.get("password"),
      });
      if (result.error) {
        toast(result.error.message);
      } else if (result.data.token) {
        window.location.href = "/app";
      }
    } catch (err) {
      toast("Oops! Something went wrong...");
    }
  };

  return (
    <div class="max-w-4xl mx-auto flex flex-col justify-center items-center min-h-[100vh] gap-3">
      <div class={cn("flex flex-col gap-6")}>
        <Card>
          <CardHeader>
            <CardTitle class="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit}>
              <div class="flex flex-col gap-6">
                <div class="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div class="grid gap-2">
                  <div class="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    name="password"
                    id="password"
                    type="password"
                    required
                  />
                </div>
                <Button type="submit" class="w-full">
                  Login
                </Button>
              </div>
              <div class="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="/sign-up" class="underline underline-offset-4">
                  Sign up
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
