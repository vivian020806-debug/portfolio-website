import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { Hero } from "@/components/hero";

export default function Home() {
  const fragmentsDirectory = join(process.cwd(), "public", "images", "fragments");
  const fragmentImages = existsSync(fragmentsDirectory)
    ? readdirSync(fragmentsDirectory)
        .filter((fileName) => /\.(avif|gif|jpe?g|png|webp)$/i.test(fileName))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
        .map((fileName) => `/images/fragments/${encodeURIComponent(fileName)}`)
    : [];

  return <Hero fragmentImages={fragmentImages} />;
}
