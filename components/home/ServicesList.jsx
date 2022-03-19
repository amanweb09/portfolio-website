import Service from "../Service";
import Link from 'next/link'

const ServicesList = () => {
    return (
        <div>
            <Service
                btnCss={{
                    background: "linear-gradient(90deg, #12ADCF 0%, #046381 95.48%)",
                    color: "#fff"
                }}
                btnText="View all web services"
                heading="Website and app development"
                para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum nobis ab beatae repudiandae, voluptas impedit architecto, maiores, neque explicabo fugiat debitis eum cum quisquam eligendi voluptatum. Minus, tempore praesentium. Fuga sapiente quas dolorem iure!">

                <img
                    className="block mx-auto w-2/3 mb-6 mt-14"
                    src="/images/website-mockup-2.png"
                    alt="website mockup" />
            </Service>

            <div className="w-full h-4 my-6 bg-gray-200 dark:bg-slate-600 block"></div>

            <div className="container mx-auto flex-center sm:flex-row flex-col-reverse">
                <div className="sm:w-4/6 w-full sm:px-0 px-4">
                  
                    <p className="mt-4 dark:text-white sm:text-base text-sm sm:text-left text-center">
                        <span className="font-bold">From</span>
                        <span className="text-3xl font-bold text-pink-500 py-2 block">DESIGNING</span>
                        <span className="font-bold">To</span>
                        <span className="text-3xl font-bold text-cyan-500 py-2 block">PRODUCTION</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia blanditiis ut laborum eius architecto officia. Perspiciatis adipisci expedita deserunt recusandae, quod at! Ipsam earum aut magni similique consequatur et!
                    </p>

                    <h2 className="my-6 font-bold dark:text-gray-200 text-gray-500 text-center sm:text-left uppercase">We'll handle everything!</h2>
                </div>
                <div className="w-2/6">
                    <img
                        className="sm:w-80 w-96 sm:mb-0 mb-10 mt-10 sm:scale-100 scale-125"
                        src="/images/docker.png"
                        alt="docker" />
                </div>
            </div>

            <div className="w-full h-4 my-6 bg-gray-200 dark:bg-slate-600 block"></div>

            <div className="container mx-auto pb-4 pt-12">
                <img
                    className="sm:h-96 h-72 sm:scale-125 scale-100 sm:mb-16 mb-8 mx-auto block"
                    src="/images/website-mockup.png"
                    alt="website mockup" />
                <h1 className="text-center sm:text-6xl text-4xl dark:text-white uppercase font-bold mt-2 sm:mt-4">Wack <span className="culture">Culture</span></h1>
                <h3 className="text-center sm:text-xl text-lg text-gray-500 dark:text-gray-200 mt-2 sm:mt-4 sm:mt-0 uppercase">an E-commerce website</h3>

                <button
                    className="flex-center uppercase w-80 h-12 mt-10 mb-6 bg-black dark:bg-white dark:text-black text-white block mx-auto">
                    see our works
                    <span className="text-2xl ml-2">&rsaquo;</span>
                </button>
            </div>

            <div className="w-full h-4 my-6 bg-gray-200 dark:bg-slate-600 block"></div>


            <style jsx>
                {
                    `
                        .react {
                            animation: reactAnimation 5s infinite linear 
                        }
                        @keyframes reactAnimation {
                            100% {
                                transform: rotateZ(360deg)
                            }
                        }
                        .text-main {
                            background: linear-gradient(103.87deg, #00F5A0 16.81%, #73EFFF 67.62%);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                            text-fill-color: transparent;
                        }
                        .culture {
                            color: #70a73c;
                        }

                    `
                }
            </style>
        </div>
    );
}

export default ServicesList;