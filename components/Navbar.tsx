import Link from "next/link";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import NavItems from "./NavItems";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href={ROUTES.HOME}>
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        <Link href={ROUTES.SIGN_IN}>
          <p>Sign In</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
