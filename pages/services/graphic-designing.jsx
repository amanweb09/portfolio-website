import Navbar from "../../components/Navbar";
import Service from "../../components/Service";
import Footer from "../../components/home/Footer";

const GraphicDesigning = () => {
    return (
        <div className="container mx-auto">
            <Navbar />
            <section className="w-full sm:py-12">
                <h1 className="sm:text-7xl text-3xl sm:mt-12 mt-20 sm:mb-0 mb-12 font-bold text-center text-teal-500 dark:text-teal-300 uppercase sm:px-12">
                    The best for your <br /> app and website <br /> is here!
                    <br />
                    <img
                        className="w-16 mt-6 block mx-auto"
                        src="/images/globe.png"
                        alt="globe" />
                </h1>
            </section>

            <div className="w-full h-4 my-6 bg-gray-200 dark:bg-slate-600 block"></div>
            
            <Service
                heading="illustrations for website and app"
                para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores beatae blanditiis, commodi nihil et tempore quo nam fugiat ducimus. Officiis culpa eaque blanditiis qui ratione nesciunt aut molestiae sed dolorem!"
                btnCss={{ background: "linear-gradient(90deg, #F582AE 0%, #FFE600 157.01%)" }}
                btnText="get quotation">
                <img
                    className="block mx-auto sm:w-2/6 w-4/6 my-4"
                    src="/images/icon-design.png"
                    alt="icon design" />
            </Service>

            <div className="w-full h-4 my-6 bg-gray-200 dark:bg-slate-600 block"></div>

            <Service
                heading="custom icons"
                para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores beatae blanditiis, commodi nihil et tempore quo nam fugiat ducimus. Officiis culpa eaque blanditiis qui ratione nesciunt aut molestiae sed dolorem!"
                btnCss={{ background: "linear-gradient(90deg, #F582AE 0%, #FFE600 157.01%)" }}
                btnText="get quotation">
                <img
                    className="block mx-auto w-2/6 my-4"
                    src="/images/hands.png"
                    alt="icon design" />
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

export default GraphicDesigning;