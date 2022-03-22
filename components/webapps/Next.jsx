import Link from 'next/link'
import { useRouter } from 'next/router'


const Next = () => {

    const router = useRouter()

    return (
        <div className="w-full sm:pt-20 pt-10 pb-6">
            <img
                className="sm:w-40 w-32 mx-auto block"
                src="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png"
                alt="next.js" />

            <h1 className="text-center font-bold sm:text-4xl text-3xl uppercase mt-6 next">the best of javascript - next.js</h1>

            <p className="text-center dark:text-gray-300 text-gray-500 mt-2 sm:px-12 px-6 sm:text-base text-sm">
                Explore the power of the JS monster - Next.js, serving you with commendable features like SSG, SSR, super-simple
                deployment, easy management, scalability, lightning-fast performance, and lots more. If you're looking for something
                that is performance-oriented, Next.js is for you!
            </p>

            <Link href="/"><a
                onClick={() => router.push('/contact')}
                className="mx-auto dark:text-white block w-max font-bold uppercase mt-6 hover:text-purple-500">
                inquire <span>&rsaquo;</span>
            </a></Link>

            <style jsx>
                {
                    `
                        .next {
                            background: linear-gradient(90deg, #77A1D3 0%, #79CBCA 50%, #E684AE 100%);
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