"use client";
import ROUTES from "@/constants/routes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {
  const pathname = usePathname();
  console.log(pathname, ROUTES.HOME, pathname === ROUTES.HOME);
  return (
    <div className="flex items-center gap-4">
      <Link
        href={ROUTES.HOME}
        className={cn(pathname === ROUTES.HOME && "text-primary font-semibold")}
      >
        <p>Home</p>
      </Link>
      <Link
        href={ROUTES.COMPANIONS}
        className={cn(
          pathname === ROUTES.COMPANIONS && "text-primary font-semibold"
        )}
      >
        <p>Companions</p>
      </Link>
      <Link
        href={ROUTES.MY_JOURNEY}
        className={cn(
          pathname === ROUTES.MY_JOURNEY && "text-primary font-semibold"
        )}
      >
        <p>My Journey</p>
      </Link>
    </div>
  );
};

export default NavItems;
