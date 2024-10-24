import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

export const metadata = {
  title: "Hi I'm Daphnee, a web developer",
  description: 'This is an personal website built with Next.js 13.',
  openGraph: {
    title: "Hi I'm Daphnee, a web developer",
    description: 'This is a personnal website built with Next.js 13.',
    url: 'https://www.daphneekbidi.com',
    siteName: 'My personal Website',
    images: [
      {
        url: 'daphnee.jpg',
        width: 600,
        height: 600,
        alt: 'Portrait',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@daphneekbidi',
    title: 'My personnal Website',
    description: 'This is an personnal website built with Next.js 13.',
    image: 'daphnee.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <Navbar />
          <main
            className='antialiased bg-[fafafa] scroll-smooth'
            style={{ fontFamily: 'Inconsolata-Regular' }} >
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </>
  );
}
