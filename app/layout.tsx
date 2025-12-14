import type { Metadata } from "next";
import "./globals.css";
import TanStackProvider from "../components/TanStackProvider/TanStackProvider";
import Footer from "@/components/Footer/Footer";
import css from "./page.module.css";

export const metadata: Metadata = {
  title: "Timer",
  description: "My time",
  icons: { icon: "/favicon.png" },
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
