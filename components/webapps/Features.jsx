const Features = () => {
    return (
        <div
            style={{ minHeight: '92vh' }}
            className="w-full relative py-6">

            <div
                style={{ minHeight: '25vh' }}
                className="flex-center flex-col w-5/12 absolute left-4 top-2">
                <h1
                    className="text-7xl font-bold uppercase scalable">
                    scalable
                </h1>
                <p className="text-xs text-gray-500 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda molestiae aliquam totam nesciunt. In quibusdam sint, eos consectetur magni exercitationem, vel voluptates ratione est officia earum adipisci sapiente. Ullam!
                </p>
            </div>

            <div
                style={{ minHeight: '25vh' }}
                className="flex-center flex-col w-5/12 absolute right-4 top-16">
                <h1
                    className="text-6xl font-bold uppercase easy text-center">
                    easy management
                </h1>
                <p className="text-xs text-gray-500 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda molestiae aliquam totam nesciunt. In quibusdam sint, eos consectetur magni exercitationem, vel voluptates ratione est officia earum adipisci sapiente. Ullam!
                </p>
            </div>

            <div
                style={{ minHeight: '25vh' }}
                className="flex-center flex-col w-5/12 absolute left-4 bottom-24">
                <h1
                    className="text-7xl font-bold uppercase support text-center">
                    24x7 <br /> support
                </h1>
                <p className="text-xs text-gray-500 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda molestiae aliquam totam nesciunt. In quibusdam sint, eos consectetur magni exercitationem, vel voluptates ratione est officia earum adipisci sapiente. Ullam!
                </p>
            </div>

            <div
                style={{ minHeight: '25vh' }}
                className="flex-center flex-col w-5/12 absolute right-8 bottom-12">
                <h1
                    className="text-7xl font-bold uppercase ssl text-center">
                    ssl + ddos <br /> protection
                </h1>
                <p className="text-xs text-gray-500 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda molestiae aliquam totam nesciunt. In quibusdam sint, eos consectetur magni exercitationem, vel voluptates ratione est officia earum adipisci sapiente. Ullam!
                </p>
            </div>

            <h1
                style={{ left: '50%', transform: 'translateX(-50%)' }}
                className="absolute bottom-0 text-2xl mt-6 font-bold text-gray-500 flex-center">
                <span>AND MUCH MORE</span>
                <img
                    className="w-6 ml-2"
                    src="/images/flame.png"
                    alt="flame" />
            </h1>


            <style jsx>
                {
                    `
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
    `
                }
            </style>
        </div>
    );
}

export default Features;