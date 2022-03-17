const City = () => {
    return (
        <div className="container mx-auto overflow-hidden relative flex-center">

            <img
                className="buildings h-2/3 absolute bottom-0 left-0"
                src="/images/building-bg.png"
                alt="buildings" />

            <div className="w-full h-12 bg-black flex items-center justify-between absolute left-0 bottom-0 py-4">
                <div className="bg-yellow-500 w-48 h-2"></div>
                <div className="bg-yellow-500 w-48 h-2"></div>
                <div className="bg-yellow-500 w-48 h-2"></div>
            </div>

            <img
                className="h-48 plane absolute bottom-4 left-8"
                src="/images/aeroplane.png"
                alt="plane" />

            <div className="absolute top-4 left-0 w-full flex items-center justify-between">
                <img
                    className="h-20"
                    src="/images/clouds.png"
                    alt="clouds" />
                <div>
                    <img
                        className="h-40"
                        src="/images/clouds.png"
                        alt="clouds" />
                    <div className="w-24 h-24 rounded-full bg-yellow-500"></div>
                </div>
            </div>

            <h1 className="text-center text-7xl font-bold uppercase text">
                get the
                <br />
                best
                <br />
                for your app
                <br />
                <span className="flex">
                    or website
                    <img
                        className="w-12"
                        src="/images/Fire.png"
                        alt="flame" />
                </span>

            </h1>
            <style jsx>
                {
                    `
                    .container {
                        height: 100vh;
                    }
                    .plane {
                        transform: rotateZ(-10deg)
                    }
                    .buildings {
                        z-index: -1;
                    }
                    .text {
                        background: linear-gradient(90deg, #FFE259 0%, #FFA751 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        text-fill-color: transparent;
                        line-height: 1.25;
                    }
                `
                }
            </style>
        </div>
    );
}

export default City;