const NewsLetter = () => {
    return (
        <div
            className="w-full mt-6 sm:px-0 px-2 wrapper">
            <h1 className="font-bold my-4 text-xl dark:text-gray-200">Drop your email, we'll contact you</h1>

            <input
                style={{ borderBottom: '1px solid' }}
                className="sm:w-8/12 w-10/12 h-10 mt-6 dark:bg-transparent dark:text-gray-200 border-black dark:border-white"
                placeholder="Drop your email here..."
                type="email" />

            <button
                className="w-48 h-10 block mx-auto dark:bg-gray-100 dark:text-black bg-black text-white font-bold mt-10">
                Submit
            </button>

            <style jsx>
                {
                    `
                .wrapper {
                    height: 40vh;
                    border-yop: 1px solid #dcdcdc;
                }
                input {
                    outline: none;
                }
                input:focus {
                    border-bottom: 2px solid hotpink;
                }
                @media only screen and (max-width: 450px) {
                    height: 30vh;
                }
            `
                }
            </style>
        </div>
    );
}

export default NewsLetter;