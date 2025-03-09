import * as React from "preact/compat";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

const Label = React.forwardRef<HTMLLabelElement, { className?: string }>(
  (props, ref) => (
    <label ref={ref} class={cn(labelVariants(), props.className)} {...props} />
  )
);
Label.displayName = "Label";

export { Label };
