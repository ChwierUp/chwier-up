import { CircleUser } from "lucide-react";
import { Button } from "./Button";

interface ProfileIconProps {
  className?: string;
}

export default function ProfileIcon({ className }: ProfileIconProps) {
  return (
    <Button size="icon" variant="outline" className={`${className}`}>
      <CircleUser size={40} strokeWidth={1} aria-label="유저 프로필" />
    </Button>
  );
}
