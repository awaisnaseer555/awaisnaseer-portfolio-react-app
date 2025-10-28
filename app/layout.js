import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import { type } from "os";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Awais Naseer - Principal Software Engineer",
  description: "Portfolio site of Awais Naseer, a self-taught full-stack developer with a passion for continuous learning. I enjoy exploring new technologies, collaborating with others, and taking on challenging projects. As a quick learner, I’m always eager to grow and push my limits.",
  siteName: "Awais Naseer Portfolio",
  authors: [{ name: "Awais Naseer", url: "https://awaisnaseer.vercel.com" }],
  keywords: [
    "Awais Naseer",
    "Awais",  "Awais Naseer Portfolio",
    "Portfolio",
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer",
    "JavaScript"],
  type: "website",
  metadataBase: [new URL("https://awaisnaseer.vercel.app")],
  images: [
    {
      url: "/self.jpg",
      alt: "Awais Naseer Portfolio Image",
    }]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
