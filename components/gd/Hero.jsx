const Hero = () => {
    return (
        <div className="w-full overflow-hidden wrapper relative flex-center">

            <img
                className="absolute h-40 bottom-0 left-0 w-full z-50"
                src="/images/sea-wave.png"
                alt="waves" />

            <img
                className="dolphin absolute"
                src="/images/dolphin.png"
                alt="dolphin" />

            <div className="absolute right-20 top-20 flex">
                <img
                    className="h-20 fish-1"
                    src="/images/fish-1.png"
                    alt="fish" />
                <img
                    className="h-20 mt-24 fish-2"
                    src="/images/fish-2.png"
                    alt="fish" />
                <img
                    className="h-20 mt-16 fish-3"
                    src="/images/fish-3.png"
                    alt="fish" />
            </div>

            <div className="absolute left-20 top-4 flex-center">
                <img
                    className="h-20"
                    src="/images/puffer-fish.png"
                    alt="fish" />
            </div>

            <h1 className="text-center uppercase font-bold text-7xl text">
                graphic 
                <br />
                designing
            </h1>

            <style jsx>
                {
                    `
                    .wrapper {
                        height: 88vh;
                        background: url(/images/sea-bg.png) center no-repeat;
                        background-size: 100% 100%;
                    }
                    .text {
                        background: linear-gradient(90deg, #2B5876 0%, #4E4376 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        text-fill-color: transparent;                        
                    }
                    .dolphin {
                        animation: dolphin 4s infinite 6s ease-in-out;
                    }
                    @keyframes dolphin {
                        0% {
                            bottom: -500px;
                            left: 3rem;
                            transform: rotateZ(-90deg);
                        }
                        50% {
                            bottom: 175px;
                            left: 14rem;
                            transform: rotateZ(20deg);
                        }
                        100% {
                            bottom: -500px;
                            left: 28rem;
                            transform: rotateZ(135deg);
                        }
                    }
                    
                `
                }
            </style>
        </div>
    );
}

export default Hero;