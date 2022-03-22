import { useRouter } from 'next/router'
import ServicesList from "../components/home/ServicesList";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import NewsLetter from "../components/home/NewsLetter";
import Footer from "../components/home/Footer";
import Head from 'next/head'
import Review from '../components/home/Review';

const Index = () => {

  const router = useRouter()

  return (
    <div className="container mx-auto dark:bg-slate-900">
      <Navbar />

      <Head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <title>Webmon - Web Development Company in India</title>
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
        className="text-center font-bold sm:text-4xl text-2xl mt-4 small-text bg-gradient-to-r from-pink-500 to-cyan-500">
        WEB DEVELOPERS AND STARTUP ENTHUSIASTS
      </div>

      <button
        onClick={() => router.push('/contact')}
        className="hero-btn w-60 h-12 block mx-auto text-white font-semibold mt-8">
        GET IN TOUCH
      </button>

      <ServicesList />


      <Service
        heading="graphics for website and apps"
        para="
        Discard those bland graphics and give your website the grapics it deserves! We craft extravagant graphics 
        and illustrations for your website, app, or social media so you don't miss a chance of conversion!
        "
        btnText="View all graphics services"
        link="/services/graphic-designing"
        btnCss={{
          background: "linear-gradient(90deg, #FF0000 0%, #AA0404 95.48%)",
          color: "#fff"
        }}>
        <img
          className="sm:h-80 h-56 block mx-auto mt-8 mb-2"
          alt="illustrations"
          src="/images/standing-2.png" />
      </Service>

      <div className="w-full h-4 mt-6 bg-gray-200 dark:bg-slate-600 block"></div>

      <Review />

      <div className="w-full h-4 mt-6 bg-gray-200 dark:bg-slate-600 block"></div>

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
            // background: linear-gradient(180deg, #a0a0a0 0%, rgba(156, 156, 156, 0.53) 40.91%);
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

export default Index;