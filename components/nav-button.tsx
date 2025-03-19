import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  label: string;
  isActive?: boolean;
};

export const NavButton = (props: Props) => {
  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn(
        "capitalize w-full lg:w-auto justify-between font-normal hover:bg-white/20 hover:text-white border-none focusvisible:ring-offset-0 focusvisible:ring-transparent outline-none text-white focus:bg-white/30 transition",
        props.isActive ? "bg-white/10" : "bg-transparent"
      )}
    >
      <Link href={props.href}>{props.label}</Link>
    </Button>
  );
};
