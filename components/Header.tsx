import Logo from "@/public/logo.svg";
import ProfileIcon from "./ProfileButton";

export default function Header() {
  return (
    <header className="fixed top-0 z-10 h-16 w-full border-b border-accent-200 bg-bg-100 px-[113px]">
      <div className="flex h-full w-full max-w-[1440px] items-center justify-between">
        <figure className="flex shrink-0 items-center">
          <Logo
            className="cursor-pointer fill-black dark:fill-white"
            aria-label="취얼업 로고"
          />
          <p className="ml-10 cursor-pointer fill-black dark:fill-white">Tip</p>
        </figure>
        <ProfileIcon className="rounded-full bg-bg-100 dark:bg-bg-100" />
      </div>
    </header>
  );
}
