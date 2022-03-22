const Review = () => {
    return (
        <div className='container mx-auto py-8'>
            <h1 className='uppercase font-bold text-xl sm:ml-0 ml-2 dark:text-white'>what do clients say</h1>

            <img
                className="sm:w-40 w-24 block mx-auto my-8"
                src="/images/quote.png"
                alt="quote" />

            <div className="w-full flex-center flex-col">
                <h1 className="uppercase font-bold text-lg dark:text-white">Aman Khanna</h1>
                <div className="flex-center">
                    <img
                        className="w-8"
                        src="/images/star.png"
                        alt="star" />
                    <img
                        className="w-8"
                        src="/images/star.png"
                        alt="star" />
                    <img
                        className="w-8"
                        src="/images/star.png"
                        alt="star" />
                    <img
                        className="w-8"
                        src="/images/star.png"
                        alt="star" />
                    <img
                        className="w-8"
                        src="/images/star.png"
                        alt="star" />
                </div>

                <p className="sm:w-4/6 dark:text-gray-200 w-full px-4 sm:px-0 block mx-auto text-gray-600 text-center my-4">
                    Professional service. I got my website built and got the website much above my expectations!
                </p>
            </div>

        </div>
    );
}

export default Review;