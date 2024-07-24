import { Search } from "lucide-react";
import { Input } from "@/components/Input";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSubmit: () => void;
  className?: string;
}

export default function SearchBar({ onSubmit, className }: SearchBarProps) {
  return (
    <form
      className={cn("relative flex w-full items-center", className)}
      onSubmit={onSubmit}
    >
      <Search color="#949494" className="absolute ml-2" aria-label="돋보기" />
      <Input type="text" placeholder="키워드로 검색하세요." className="pl-10" />
    </form>
  );
}
