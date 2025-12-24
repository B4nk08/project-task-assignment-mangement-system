import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonForAuth = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function ButtonForAuth({
  children,
  className,
  onClick,
}: ButtonForAuth) {
  return (
    <Button
      variant="outline"
      onClick={onClick}
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
