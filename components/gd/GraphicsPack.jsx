import Link from 'next/link'

const GraphicsPack = () => {
    return (
        <div className="container mx-auto relative pt-24">
            <img
                className="absolute top-0 left-0 w-full h-24"
                src="/images/wave-black.png"
                alt="wave" />

            <h1 className="text-center font-bold text-8xl uppercase text mt-8">
                graphics pack
                <br />
                for
                <br />
                web and apps
            </h1>

            <p
                className="text-center px-8 mt-4 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse harum id dolores delectus! Dolor cupiditate, deleniti iusto adipisci delectus amet quaerat consequatur. Iste minus, in consequatur quo perferendis recusandae, accusantium a veritatis natus, modi maiores accusamus consequuntur quas. Ut, in!
            </p>

            <Link href="/"><a className="w-max font-bold block mx-auto my-8">INQUIRE <span>&rsaquo;</span></a></Link>
            <style jsx>
                {
                    `
        .text {
            background: linear-gradient(90deg, #FFE000 0%, #799F0C 100%);
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

export default GraphicsPack;