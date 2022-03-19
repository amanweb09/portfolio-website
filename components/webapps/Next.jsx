import { useState, useEffect } from 'react';
import Link from 'next/link'

const Next = () => {

    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const _theme = window.localStorage.getItem('theme')
        setTheme(_theme)
    })
    // const theme = window.localStorage.getItem('theme');

    return (
        <div className="w-full sm:pt-20 pt-10 pb-6">
            <img
                className="sm:w-40 w-32 mx-auto block"
                // src={theme === 'dark' ? "/images/next-js-white.png" : "/images/next.png"}
                src="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png"
                alt="react" />

            <h1 className="text-center font-bold sm:text-4xl text-3xl uppercase mt-6 next">the best of javascript - next.js</h1>

            <p className="text-center dark:text-gray-300 text-gray-500 mt-2 sm:px-12 px-6 sm:text-base text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus adipisci, quos ullam quasi cumque ad veritatis! Praesentium, dolor laboriosam? Corrupti accusamus ea recusandae, laborum delectus blanditiis ducimus sit itaque, numquam id temporibus. Cum deserunt dolorum fugiat. Aut dolor vitae, labore, et deserunt facilis voluptate, doloribus nulla quisquam nostrum distinctio possimus.
            </p>

            <Link href="/"><a className="mx-auto dark:text-white block w-max font-bold uppercase mt-6 hover:text-purple-500">
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