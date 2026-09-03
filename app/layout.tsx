import type { Metadata } from "next";
import "@fontsource/bebas-neue";
import "@fontsource/cormorant-garamond/latin-500.css";
import "@fontsource/cormorant-garamond/latin-600.css";
import "@fontsource/noto-sans-sc/chinese-simplified-300.css";
import "@fontsource/kalam/latin-700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "FRAGMENTS of Me — 吕诗云作品集",
  description: "吕诗云的品牌设计、平面设计与 AIGC 视觉设计作品集。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
