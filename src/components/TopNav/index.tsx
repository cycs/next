import Link from "next/link";
import { FC } from "react";

export const TopNav: FC = () => {
  console.log("top nav");

  return (
    <nav className="h-16 flex items-center justify-center fixed">
      <ul className="flex flex-row gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/colorflow">ColorFlow</Link>
        </li>
        <li>
          <Link href="/test">Test</Link>
        </li>
      </ul>
    </nav>
  );
};
