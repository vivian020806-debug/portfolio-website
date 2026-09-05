import type { Metadata } from "next";
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
