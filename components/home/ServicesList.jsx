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
                heading="Web application development"
                para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum nobis ab beatae repudiandae, voluptas impedit architecto, maiores, neque explicabo fugiat debitis eum cum quisquam eligendi voluptatum. Minus, tempore praesentium. Fuga sapiente quas dolorem iure!">

                <img
                    className="block mx-auto w-2/3 mb-6 mt-14"
                    src="/images/website-mockup.png"
                    alt="website mockup" />
            </Service>

            <Service
                btnCss={{
                    background: "linear-gradient(90deg, #FF0000 0%, #AA0404 95.48%)",
                    color: "#fff"
                }}
                heading="Single-page application development"
                para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum nobis ab beatae repudiandae, voluptas impedit architecto, maiores, neque explicabo fugiat debitis eum cum quisquam eligendi voluptatum. Minus, tempore praesentium. Fuga sapiente quas dolorem iure!">

                <img
                    className="react block mx-auto sm:w-80 w-44 mb-6"
                    src="/images/react.png"
                    alt="single page apps" />
            </Service>

            <Service
                btnCss={{
                    background: "linear-gradient(90deg, #05E600 0%, #00A438 95.48%)",
                    color: "#fff"
                }}
                heading="CUSTOM SERVER AND REST API"
                para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum nobis ab beatae repudiandae, voluptas impedit architecto, maiores, neque explicabo fugiat debitis eum cum quisquam eligendi voluptatum. Minus, tempore praesentium. Fuga sapiente quas dolorem iure!">

                <img
                    className="block mx-auto sm:w-80 w-64 mb-6 mt-10"
                    src="/images/api.png"
                    alt="single page apps" />
            </Service>


            <Link href='/web-services'><a
                className="block mx-auto w-max h-max mb-4 hover:text-purple-500 font-bold">
                See all web services <span>&rsaquo;</span>
            </a></Link>


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


                    `
                }
            </style>
        </div>
    );
}

export default ServicesList;