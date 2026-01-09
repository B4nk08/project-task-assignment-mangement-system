import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonForAuth = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  from?: string;
  onClick?: () => void;
};

export function ButtonForAuth({
  children,
  className,
  type = "button",
  from,
  onClick,
}: ButtonForAuth) {
  return (
    <Button
      type={type}
      form={from}
      onClick={onClick}
      variant="outline"
      className={cn(
        `
        w-40 h-11
        px-0 py-0
        text-sm font-medium
        rounded-md
        leading-none
        transition-all duration-200
        `,
        className
      )}
    >
      {children}
    </Button>
  );
}
