import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="hidden">
      <ul className="z-10 flex gap-14 text-xl text-secondary-foreground">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
