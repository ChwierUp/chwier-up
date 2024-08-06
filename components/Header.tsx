import Link from "next/link";
import { auth } from "@/auth";
import Logo from "@/public/logo.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/NavigationMenu";

const ROUTE_PAGE = [
  {
    path: "/todo",
    pageName: "Todo",
  },
  {
    path: "/article",
    pageName: "Article",
  },
];

export default async function Header() {
  const session = await auth();
  const avatarImage = session?.user?.image
    ? session.user.image
    : "https://github.com/shadcn.png";

  return (
    <header className="fixed top-0 z-10 h-16 w-full border-b border-accent-200 bg-bg-100 px-[113px]">
      <div className="flex h-full w-full max-w-[1440px] items-center justify-between">
        <div className="flex shrink-0 items-center">
          <Logo
            className="cursor-pointer fill-black dark:fill-white"
            aria-label="취얼업 로고"
          />
          <div className="ml-8 h-5 border border-text-100" />
          <NavigationMenu className="ml-3">
            <NavigationMenuList>
              {ROUTE_PAGE.map(({ path, pageName }) => (
                <NavigationMenuItem key={pageName} className="pl-5">
                  <Link href={path}>{pageName}</Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Avatar className="h-8 w-8">
          <AvatarImage src={avatarImage} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
