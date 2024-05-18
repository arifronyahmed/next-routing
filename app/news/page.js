import Link from "next/link";
import React from "react";

const newsLinks = [
  {
    title: "news about football",
    link: "news/football",
  },
];

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/firstLink">First Link</Link>
        </li>
        <li>
          <Link href="/news/secondLink">Second Link</Link>
        </li>
        <li>
          <Link href="/news/thirdLink">Third Link</Link>
        </li>
      </ul>
    </>
  );
}
