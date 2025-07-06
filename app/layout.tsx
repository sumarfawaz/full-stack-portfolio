import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sumar Fawaz - Full-Stack Developer",
  description:
    "Sumar Fawaz is a Full-Stack Developer with a passion for Web Applications, AI, and Blockchain. With over 2 years of industry experience, he currently works at Weblankan Pvt Ltd—one of Sri Lanka's leading website development companies—building cutting-edge applications and websites.",
  keywords: [
    "Backend Developer",
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer",
    "System Architecture",
    "API Development",
    "REST APIs",
    "GraphQL",
    "Database Design",
    "SQL",
    "NoSQL",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Cloud Computing",
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "DevOps",
    "Agile Development",
    "Clean Code",
    "Scalable Systems",
    "System Design",
    "Distributed Systems",
    "Backend Architecture",
    "Node.js",
    "Express.js",
    "NestJS",
    "Python",
    "Flask",
    "Django",
    "TypeScript",
    "Next.js",
    "React",
    "Software Architecture",
    "Blockchain Developer",
    "AI Engineer",
    "Machine Learning",
    "Web Applications",
    "GitHub Portfolio",
    "Research Engineer",
    "Tech Blog",
    "Sumar Fawaz",
  ],
  authors: [{ name: "Sumar Fawaz" }],
  creator: "Sumar Fawaz",
  openGraph: {
    title: "Sumar Fawaz - Full-Stack | AI | Blockchain",
    description:
      "Sumar Fawaz is a Full-Stack Developer with a passion for Web Applications, AI, and Blockchain. With over 2 years of industry experience, he currently works at Weblankan Pvt Ltd—one of Sri Lanka's leading website development companies—building cutting-edge applications and websites.",
    url: "https://your-domain.com",
    siteName: "Sumar Fawaz - Full-Stack Developer | AI | Blockchain Researcher",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sumar Fawaz -Full-Stack Developer | AI | Blockchain Researcher",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumar Fawaz -Full-Stack Developer | AI | Blockchain Researcher",
    description:
      "Sumar Fawaz is a Full-Stack Developer with a passion for Web Applications, AI, and Blockchain. With over 2 years of industry experience, he currently works at Weblankan Pvt Ltd—one of Sri Lanka's leading website development companies—building cutting-edge applications and websites.",
    creator: "@yourusername",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
