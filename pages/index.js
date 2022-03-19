import { useRouter } from 'next/router'
import GDHero from "../components/home/GDHero";
import ServicesList from "../components/home/ServicesList";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import Link from 'next/link'
import NewsLetter from "../components/home/NewsLetter";
import Footer from "../components/home/Footer";
import Head from 'next/head'

const index = () => {

  const router = useRouter()

  return (
    <div className="container mx-auto dark:bg-slate-900">
      <Navbar />

      <Head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <title>WebNaught - Web Services</title>
      </Head>

      <div className="text-center sm:mt-20 mt-24">
        <span
          data-aos="fade-down"
          className="hero-text font-bold sm:text-9xl sm:mt-0 mt-20 text-6xl block">WE BUILD.</span>
        <span
          data-aos="fade-up"
          className="hero-text font-bold sm:mb-0 mb-14 block sm:text-9xl text-6xl">YOU MINT.</span>
      </div>

      <div
        data-aos="flip-down"
        // style={{ color: "#605D5D" }}
        className="text-center font-bold mt-8 text-gray-600 dark:text-gray-200">
        WE ARE
      </div>

      <div
        data-aos="flip-up"
        className="text-center font-bold sm:text-4xl text-2xl mt-4 small-text">
        WEB DEVELOPERS AND STARTUP ENTHUSIASTS
      </div>

      <button
        onClick={() => router.push('/contact')}
        className="hero-btn w-60 h-12 block mx-auto text-white font-semibold mt-8">
        GET IN TOUCH
      </button>

      <ServicesList />

      <GDHero />

      <section>
        <Service
          heading="ILLUSTRATIONS FOR WEB AND APPS"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum nobis ab beatae repudiandae, voluptas impedit architecto, maiores, neque explicabo fugiat debitis eum cum quisquam eligendi voluptatum. Minus, tempore praesentium. Fuga sapiente quas dolorem iure!"
          btnCss={{
            background: "linear-gradient(90deg, #12ADCF 0%, #046381 95.48%)",
            color: "#fff"
          }}>
          <img
            className="sm:h-80 h-56 block mx-auto mt-8 sm:mb-0 mb-2"
            alt="illustrations"
            src="/images/standing-2.png" />
        </Service>

        <Service
          heading="CUSTOM ICON PACKS"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum nobis ab beatae repudiandae, voluptas impedit architecto, maiores, neque explicabo fugiat debitis eum cum quisquam eligendi voluptatum. Minus, tempore praesentium. Fuga sapiente quas dolorem iure!"
          btnCss={{
            background: "linear-gradient(90deg, #0094FF 0%, #03F0FF 95.48%)"
          }}>
          <img
            className="sm:h-80 h-56 block mx-auto mt-8"
            alt="icons"
            src="/images/icon-basket.png" />
        </Service>

        <Service
          heading="GRAPHICS PACKAGE FOR WEB AND APP"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum nobis ab beatae repudiandae, voluptas impedit architecto, maiores, neque explicabo fugiat debitis eum cum quisquam eligendi voluptatum. Minus, tempore praesentium. Fuga sapiente quas dolorem iure!"
          btnCss={{
            background: " linear-gradient(90deg, #FFE600 0%, #D7A803 95.48%)"
          }}>
          <img
            className="sm:h-80 h-56 block mx-auto mt-8"
            alt="package"
            src="/images/Box.png" />
        </Service>
      </section>

      <Link href="/"><a className="w-max dark:text-gray-200 block mx-auto hover:text-purple-500 font-bold my-2">
        All Graphic Services <span>&rsaquo;</span>
      </a></Link>

      <NewsLetter />

      <div>
        <Footer />
      </div>

      <style jsx>
        {
          `.hero-text {
            background: linear-gradient(101.91deg, #121FCF 25.64%, #CF1512 71.9%, #C2161F 71.9%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
          .small-text {
            background: linear-gradient(180deg, #222222 0%, rgba(156, 156, 156, 0.53) 40.91%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
          @keyframes heroTextAnimation {
            0% {
              color: #000;
            }
            100% {
              background: linear-gradient(101.91deg, #121FCF 25.64%, #CF1512 71.9%, #C2161F 71.9%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              text-fill-color: transparent;
            }
          }
          .hero-btn {
            background: linear-gradient(90deg, #CF1512 0%, #AE00A7 95.48%);
          }

          `
        }
      </style>
    </div>

  );
}

export default index;