import { getDictionary } from "@/get-dictionary";
import "../UI/css/globals.css";
import { Poppins } from "next/font/google";
import Navbar from "../UI/layout/navbar/Navbar";
import Footer from "../UI/layout/footer/Footer";
import ReduxProvider from "../UI/provider/ReduxProvider";
import { GoogleAnalytics } from '@next/third-parties/google'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "EduMoodUp",
  icon: "/images/EduMoodUp.jpg",
};

export default async function RootLayout({ children, params }) {
  const intl = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <head>
        <link
          rel="shortcut icon"
          href="/images/EduMoodUp.jpg"
          type="image/x-icon"
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <ReduxProvider>
          <Navbar t={intl} />
          <section className="min-h-screen">{children}</section>
          <Footer t={intl} />
          <ToastContainer />
        </ReduxProvider>
      </body>
      <GoogleAnalytics gaId="G-T76P90PF9K" />
    </html>
  );
}
