const Features = () => {
    return (
        <div
            className="w-full relative h-max sm:py-6 py-2 wrapper">

            <div className="w-full flex items-center justify-between my-6 px-2">
                <div
                    data-aos="flip-right"
                    style={{ minHeight: '25vh' }}
                    className="flex-center flex-col w-5/12">
                    <h1
                        className="sm:text-7xl text-3xl font-bold uppercase scalable">
                        scalable
                    </h1>
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                        We're with you even when you scale. The website and apps are incredibly scalable, so you
                        can scale your website through micro-services and add new features like a doodle.
                    </p>
                </div>
                <div
                    style={{ minHeight: '25vh' }}
                    className="flex-center flex-col w-5/12 mt-20">
                    <h1
                        className="sm:text-6xl text-xl font-bold uppercase easy text-center">
                        easy management
                    </h1>
                    <p className="text-xs text-gray-500 text-center dark:text-gray-400">
                        Built with clean code, it becomes extremely easy to manage your website. In addition, 
                        you get an admin panel which helps you operate your website and app.
                    </p>
                </div>
            </div>

            <div className="w-full flex items-center justify-between sm:mt-12 mt-8 px-2">
                <div
                    style={{ minHeight: '25vh' }}
                    className="flex-center flex-col w-5/12">
                    <h1
                        className="sm:text-7xl text-3xl font-bold uppercase support text-center">
                        24x7 <br /> support
                    </h1>
                    <p className="text-xs text-gray-500 text-center dark:text-gray-400">
                        We're your tech companions. We'll take care of your website and solve even the minor of issues
                        so you mint money seamlessly!
                    </p>
                </div>

                <div
                    style={{ minHeight: '25vh' }}
                    className="flex-center flex-col sm:w-5/12 w-4/12 mt-20">
                    <h1
                        className="sm:text-7xl text-xl font-bold uppercase ssl text-center">
                        ssl + ddos <br /> protection
                    </h1>
                    <p className="text-xs text-gray-500 text-center dark:text-gray-400">
                        We emphasize security of our servers and thus, you get the most secure websites with SSL certificate and hacking attacks
                        like DDOS, XSS, and many others.
                    </p>
                </div>
            </div>

            <h1
                className="sm:text-2xl text-xl mt-12 font-bold text-gray-500 dark:text-gray-200 flex-center">
                <span>AND MUCH MORE</span>
                <img
                    className="w-6 ml-2"
                    src="/images/flame.png"
                    alt="flame" />
            </h1>

            <style jsx>
                {
                    `
                    .wrapper {
                        // min-height: 80vh;
                    }
                    .scalable {
        background: linear-gradient(180deg, #12ADCF 0%, #00576A 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
                    .easy {
        background: linear-gradient(180deg, #CF1512 0%, #FFE603 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;

    }
                    .support {
        background: linear-gradient(93.14deg, #B993D6 27.2%, #03F0FF 75.05%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;

    }
                    .ssl {
        background: linear-gradient(95.34deg, #AA0404 21.55%, #FF6363 89.83%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }

    // @media only screen and (max-width: 450px) {
    //     .wrapper {
    //         min-height: 120vh;
    //     }
    // }
    `
                }
            </style>
        </div>
        //     <div
        //         className="w-full relative py-6 wrapper">

        //         <div
        //             style={{ minHeight: '25vh' }}
        //             className="flex-center flex-col w-5/12 absolute sm:left-4 left-2 top-2">
        //             <h1
        //                 className="sm:text-7xl text-4xl font-bold uppercase scalable">
        //                 scalable
        //             </h1>
        //             <p className="text-xs text-gray-500 text-center">
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda molestiae aliquam totam nesciunt. In quibusdam sint, eos consectetur magni exercitationem, vel voluptates ratione est officia earum adipisci sapiente. Ullam!
        //             </p>
        //         </div>

        //         <div
        //             style={{ minHeight: '25vh' }}
        //             className="flex-center flex-col w-5/12 absolute right-4 top-16">
        //             <h1
        //                 className="sm:text-6xl text-3xl font-bold uppercase easy text-center">
        //                 easy management
        //             </h1>
        //             <p className="text-xs text-gray-500 text-center">
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda molestiae aliquam totam nesciunt. In quibusdam sint, eos consectetur magni exercitationem, vel voluptates ratione est officia earum adipisci sapiente. Ullam!
        //             </p>
        //         </div>

        //         <div
        //             style={{ minHeight: '25vh' }}
        //             className="flex-center flex-col w-5/12 absolute left-4 bottom-24">
        //             <h1
        //                 className="sm:text-7xl text-4xl font-bold uppercase support text-center">
        //                 24x7 <br /> support
        //             </h1>
        //             <p className="text-xs text-gray-500 text-center">
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda molestiae aliquam totam nesciunt. In quibusdam sint, eos consectetur magni exercitationem, vel voluptates ratione est officia earum adipisci sapiente. Ullam!
        //             </p>
        //         </div>

        //         <div
        //             style={{ minHeight: '25vh' }}
        //             className="flex-center flex-col sm:w-5/12 w-4/12 absolute right-8 bottom-12">
        //             <h1
        //                 className="sm:text-7xl text-3xl font-bold uppercase ssl text-center">
        //                 ssl + ddos <br /> protection
        //             </h1>
        //             <p className="text-xs text-gray-500 text-center">
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda molestiae aliquam totam nesciunt. In quibusdam sint, eos consectetur magni exercitationem, vel voluptates ratione est officia earum adipisci sapiente. Ullam!
        //             </p>
        //         </div>

        //         <h1
        //             style={{ left: '50%', transform: 'translateX(-50%)' }}
        //             className="absolute bottom-0 sm:text-2xl text-xl mt-6 font-bold text-gray-500 flex-center">
        //             <span>AND MUCH MORE</span>
        //             <img
        //                 className="w-6 ml-2"
        //                 src="/images/flame.png"
        //                 alt="flame" />
        //         </h1>


        //         <style jsx>
        //             {
        //                 `
        //                 .wrapper {
        //                     min-height: 92vh;
        //                 }
        //                 .scalable {
        //     background: linear-gradient(180deg, #12ADCF 0%, #00576A 100%);
        //     -webkit-background-clip: text;
        //     -webkit-text-fill-color: transparent;
        //     background-clip: text;
        //     text-fill-color: transparent;
        // }
        //                 .easy {
        //     background: linear-gradient(180deg, #CF1512 0%, #FFE603 100%);
        //     -webkit-background-clip: text;
        //     -webkit-text-fill-color: transparent;
        //     background-clip: text;
        //     text-fill-color: transparent;

        // }
        //                 .support {
        //     background: linear-gradient(93.14deg, #B993D6 27.2%, #03F0FF 75.05%);
        //     -webkit-background-clip: text;
        //     -webkit-text-fill-color: transparent;
        //     background-clip: text;
        //     text-fill-color: transparent;

        // }
        //                 .ssl {
        //     background: linear-gradient(95.34deg, #AA0404 21.55%, #FF6363 89.83%);
        //     -webkit-background-clip: text;
        //     -webkit-text-fill-color: transparent;
        //     background-clip: text;
        //     text-fill-color: transparent;
        // }

        // @media only screen and (max-width: 450px) {
        //     .wrapper {
        //         min-height: 74vh;
        //     }
        // }
        // `
        //             }
        //         </style>
        //     </div>
    );
}

export default Features;