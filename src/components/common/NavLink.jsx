'use client'
import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function NavLink({href, children}) {
    const pathname = usePathname();
      const isActive = pathname === href;
   
  return (
    <Link href={href} className={isActive ? "border-b-2 border-teal-600 pb-0.5 " : " hover:text-teal-600 "
        }>{children}</Link>
  )
}
