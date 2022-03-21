import { useRouter } from "next/router";

const Service = ({ children, heading, para, btnCss, btnText, link }) => {

    const router = useRouter()

    return (
        <div
            className="w-full py-4 sm:px-0 px-2 my-4 sm:my-0">
            {children}

            <h1 className="dark:text-gray-100 text-center font-bold uppercase sm:text-3xl text-xl my-4 sm:my-0">{heading}</h1>
            <p
                className="text-center text-sm font-light px-8 mt-2 text-gray-500 dark:text-gray-300">
                {para}
            </p>

            <button
                style={btnCss}
                onClick={() => link ? router.push(link) : router.push('/contact')}
                className="w-72 h-12 block mx-auto mt-8 mb-4 uppercase flex-center">
                {btnText}
                <span className="text-2xl ml-2">&rsaquo;</span>
            </button>
        </div>
    );
}

export default Service;