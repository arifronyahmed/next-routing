import Link from "next/link";

export default function MainHeader() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/news">news</Link>
        </li>
      </ul>
    </header>
  );
}
