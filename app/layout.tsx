import type { Metadata } from "next";
import "./globals.css";
import TanStackProvider from "../components/TanStackProvider/TanStackProvider";
import Footer from "@/components/Footer/Footer";
import css from "./page.module.css";

export const metadata: Metadata = {
  title: "Сторінка часу",
  description: "Час",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Сторінка часу",
    description: "Час",
    siteName: "Сторінка часу",
    url: "https://time-page-nine.vercel.app/",
    type: "website",
    images: [
      {
        url: `https://res.cloudinary.com/dyounr2tf/image/upload/v1765806005/images_qc9cki.jpg`,
        width: 1200,
        height: 630,
        alt: "Сторінка часу",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <div className={css.gluedFooterContainer}>
            <main className={css.gluedFooterMain}> {children}</main>
            <Footer />
          </div>
        </TanStackProvider>
      </body>
    </html>
  );
}
