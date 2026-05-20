import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
import styleConfig from "./styleConfig.json";
import { assertStyleConfig } from "@/types/styleConfig";
import { buildCssVars } from "@/lib/styles/buildCssVars";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qwintly Website Starter",
  description:
    "A modern Next.js boilerplate optimized for rapid, beautiful marketing sites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cfg =
    process.env.NODE_ENV === "production"
      ? (styleConfig as any)
      : assertStyleConfig(styleConfig);
  const styleTokens = buildCssVars(cfg);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <style
          id="qwintly-style-tokens"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: styleTokens }}
        />
      </head>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} font-(--font-body) antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
