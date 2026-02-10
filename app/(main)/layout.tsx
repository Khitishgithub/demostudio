import type { Metadata } from "next";
import "../globals.css";
import NavMenu from "../Components/NavMenu";
import Footer from "../Components/Footer";
import TopBar from "../Components/Topbar";

export const metadata: Metadata = {
  title: "DEMO",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="fixed top-0 left-0 w-full z-50">
          <TopBar />
          <NavMenu />
        </header>

        <main className="flex-1 pt-[160px]">{children}</main>


        <footer className="mt-5">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
