const GDHero = () => {
    return (
        <div className="sm:w-full canvas relative">

            <img
                style={{ zIndex: '1' }}
                className="dark:opacity-50 w-full h-8/12 absolute bottom-0 left-0"
                src="/images/building-bg.png"
                alt="bg" />

            <img
                style={{ zIndex: '3' }}
                className="absolute bottom-0 sm:h-4/6 h-3/6"
                src="/images/giraffe.png"
                alt="giraffe" />

            <img
                style={{ zIndex: '4' }}
                className="absolute bottom-0 right-0 h-2/6"
                src="/images/elephant.png"
                alt="elephant" />

            <img
                style={{ zIndex: '5' }}
                className="absolute bottom-0 left-0 h-10 w-full"
                src="/images/grass.png"
                alt="grass" />

            <h1
                className="sm:text-8xl text-6xl font-bold absolute gd-text text-center">
                <span
                    data-aos="flip-down"
                    className="block stroke w-max relative mx-auto">
                    GRAPHIC
                    <img
                        style={{
                            top: '-2.5rem',
                            right: '0.75rem',
                            // animation: 'bird 5s 2s infinite ease'
                        }}
                        className="h-16 absolute"
                        src="/images/bird.png"
                        alt="bird" />
                </span>
                <span
                    data-aos="flip-up"
                    className="block graphic-text">DESIGNING</span>
            </h1>


            <style jsx>
                {
                    `
                    .canvas {
                        height: 100vh
                    }
                    .graphic-text {
                        background: linear-gradient(90deg, #B993D6 0%, #8CA6DB 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        text-fill-color: transparent;

                    }
                    .stroke {
                        background: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        text-fill-color: transparent;
                    }
                    .gd-text {
                        top: 50%;
                         left: 50%;
                          transform: translate(-50%, -50%)
                    }
                    @keyframes bird {
                        50% {
                            top: -3.5rem;
                        }
                        100% {
                            top: -2.5rem;
                        }                    
                    }

                    @media only screen and (max-width: 450px) {
                        .canvas {
                            height: 80vh
                        }
                        .gd-text {
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -140%)
                        }
                    }
                    `
                }
            </style>
        </div>
    );
}

export default GDHero;