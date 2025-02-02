"use client";

import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" | "es" }>;
}) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);

  return (
    <div>
      <h1>new Article {articleId}</h1>
      <p>lang: {lang}</p>

      <nav className="flex gap-4">
        <Link href={`${articleId}?lang=fr`}>French</Link>
        <Link href={`${articleId}?lang=es`}>Spanish</Link>
        <Link href={`${articleId}?lang=sn`}>English</Link>
      </nav>
    </div>
  );
}
