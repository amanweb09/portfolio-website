const NewsLetter = () => {
    return (
        <div
            className="w-full mt-6 sm:px-0 px-2 wrapper">
            <h1 className="font-bold my-4 text-xl">Subscribe to our newsletter</h1>

            <input
                style={{ borderBottom: '1px solid #000' }}
                className="w-8/12 h-10 mt-6"
                placeholder="Drop your email here..."
                type="email" />

            <button
                className="w-48 h-10 block mx-auto bg-black text-white font-bold mt-10">Subscribe</button>

            <style jsx>
        {
            `
                .wrapper {
                    height: 40vh;
                    border-yop: 1px solid #dcdcdc;
                }
                input {
                    outline: none
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