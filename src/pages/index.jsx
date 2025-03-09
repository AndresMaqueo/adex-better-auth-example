import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default () => {
  return (
    <div class="max-w-4xl mx-auto flex flex-col justify-center items-center min-h-[100vh] gap-3">
      <div class="flex flex-col gap-4 items-center">
        <h1 class="font-semibold">Adex</h1>
        <a class={cn(buttonVariants())} href="/sign-up">
          Get Started &rarr;
        </a>
      </div>
    </div>
  );
};
