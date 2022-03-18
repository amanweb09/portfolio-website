import Link from 'next/link'

const React = () => {
    return (
        <div className="w-full min-h-screen pt-16 pb-6">
            <img
                className="sm:w-96 w-64 mx-auto block react-logo"
                src="/images/react.png"
                alt="react" />

            <h1 className="text-center font-bold sm:text-4xl text-3xl uppercase mt-4">single page applications</h1>
            <h1 className="text-center font-bold sm:text-lg text-base uppercase mt-2 text-gray-500">powered by</h1>
            <h1 className="text-center font-bold sm:text-3xl text-2xl uppercase mt-2 flex-center mb-4">
                <span className='react'>react</span>
                <img
                    className='sm:w-10 w-8'
                    src="/images/react-icon.png"
                    alt="" />
            </h1>


            <p className="text-center text-gray-500 mt-2 sm:px-12 px-6 sm:text-base text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus adipisci, quos ullam quasi cumque ad veritatis! Praesentium, dolor laboriosam? Corrupti accusamus ea recusandae, laborum delectus blanditiis ducimus sit itaque, numquam id temporibus. Cum deserunt dolorum fugiat. Aut dolor vitae, labore, et deserunt facilis voluptate, doloribus nulla quisquam nostrum distinctio possimus.
            </p>

            <Link href="/"><a className="mx-auto block w-max font-bold uppercase mt-6 hover:text-purple-500">
                inquire <span>&rsaquo;</span>
            </a></Link>

            <style jsx>
                {
                    `
                    .react-logo {
                        animation: reactAnimation 5s infinite linear 
                    }
                    @keyframes reactAnimation {
                        100% {
                            transform: rotateZ(360deg)
                        }
                    }
                        .react {
                          
background: linear-gradient(90deg, #00D8FF 30.31%, #07B1CF 65.43%);
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

export default React;