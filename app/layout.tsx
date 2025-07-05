import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],});

export const metadata: Metadata = {
  title: "Hammam Yousef | Full Stack Developer",
  description:
    "Explore the portfolio of Hammam Yousef, a Full Stack Developer skilled in React, Next.js, TypeScript, and MongoDB. Discover innovative web projects, professional experience, and animation-driven UI design.",
  keywords: [
    "Hammam Yousef",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "TypeScript",
    "MongoDB",
    "Web Developer Palestine",
    "GSAP Animation",
    "Tailwind CSS",
    "JavaScript",
  ],
  authors: [{ name: "Hammam Yousef", url: "https://github.com/HammamYousef" }],
  creator: "Hammam Yousef",
  themeColor: "#0a0a23",
  openGraph: {
    title: "Hammam Yousef | Full Stack Developer Portfolio",
    description:
      "Browse my projects and experience as a full stack developer. Specializing in React, Next.js, TypeScript, and modern web animations.",
    url: "https://your-portfolio-url.com",
    siteName: "Hammam Yousef Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hammam Yousef Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hammam Yousef | Full Stack Developer",
    description:
      "Discover my portfolio, projects, and development journey. Specialized in modern frontend and backend technologies.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="HYA" />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
