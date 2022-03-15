import Link from 'next/link'

const Next = () => {
    return (
        <div className="w-full pt-20 pb-6">
            <img
                className="w-96 mx-auto block"
                src="/images/next.png"
                alt="react" />

            <h1 className="text-center font-bold text-4xl uppercase mt-6 next">the best of javascript - next.js</h1>

            <p className="text-center text-gray-500 mt-2 px-12">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus adipisci, quos ullam quasi cumque ad veritatis! Praesentium, dolor laboriosam? Corrupti accusamus ea recusandae, laborum delectus blanditiis ducimus sit itaque, numquam id temporibus. Cum deserunt dolorum fugiat. Aut dolor vitae, labore, et deserunt facilis voluptate, doloribus nulla quisquam nostrum distinctio possimus.
            </p>

            <Link href="/"><a className="mx-auto block w-max font-bold uppercase mt-6 hover:text-purple-500">
                inquire <span>&rsaquo;</span>
            </a></Link>

            <style jsx>
                {
                    `
                        .next {
                            background: linear-gradient(90deg, #4776E6 0%, #8E54E9 100%);
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

export default Next;