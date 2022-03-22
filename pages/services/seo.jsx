import Navbar from "../../components/Navbar";
import Service from "../../components/Service";
import Footer from "../../components/home/Footer";
import Head from 'next/head'

const seo = () => {
    return (
        <div className="container mx-auto">
            <Head>
                <title>SEO - Webmon</title>
            </Head>
            
            <Navbar />
            <section className="w-full sm:py-12">
                <img
                    className="sm:w-2/6 w-5/6 sm:mt-6 mt-20 block mx-auto"
                    src="/images/sales.png"
                    alt="sales" />
                <h1 className="sm:text-5xl text-3xl mt-12 sm:mb-0 mb-12 dark:text-white font-bold text-center uppercase sm:px-12">
                    drive sales to your website.
                </h1>
            </section>

            <div className="w-full h-4 my-6 bg-gray-200 dark:bg-slate-600 block"></div>

            <Service
                heading="technical seo"
                para="
                Rank higher on google by enahncing the technical SEO of your website using proven SEO strategies and
                see your sales improving!
                "
                btnCss={{ background: "linear-gradient(90deg, #79CBCA 0%, #77A1D3 157.01%)" }}
                btnText="get quotation">
                <img
                    className="block mx-auto sm:w-1/6 w-3/6 my-4"
                    src="/images/technical-seo.png"
                    alt="technical seo" />
            </Service>

            <div className="w-full h-4 my-6 bg-gray-200 dark:bg-slate-600 block"></div>

            <Service
                heading="seo content development"
                para="
                    Our professional content developers will help you create content for your website, being it hero
                    content, blog posts, articles, guest posts, business proposals, and much more.
                "
                btnCss={{ background: "linear-gradient(90deg, #79CBCA 0%, #77A1D3 157.01%)" }}
                btnText="get quotation">
                <img
                    className="block mx-auto sm:w-1/6 w-3/6 mt-4 sm:mb-4 mb-8 dark:invert"
                    src="/images/content-writing.png"
                    alt="content writing" />
            </Service>

            <div className="w-full h-4 my-6 bg-gray-200 dark:bg-slate-600 block"></div>

            <div className="mb-6 sm:pb-0 pb-12">
                <h1 className='font-bold sm:text-3xl text-2xl text-center uppercase mt-16 dark:text-white'>custom requirements??</h1>
                <button
                    style={{
                        background: "linear-gradient(90deg, #FFE600 2.33%, #D7A803 94.13%)"
                    }}
                    className='w-64 block mx-auto mt-4 h-10 font-bold uppercase'>get in touch</button>
            </div>

            <Footer />

            <style jsx>
                {
                    `   
        .heading {
            background: linear-gradient(90deg, #FE31AA 0%, #FFC404 99.99%, #FFC700 100%, #FFC700 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
    `
                }
            </style>
        </div>
    );
}

export default seo;