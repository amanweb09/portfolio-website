const Review = () => {
    return (
        <div className='container mx-auto py-8'>
            <h1 className='uppercase font-bold text-xl'>what do clients say</h1>

            <img
                className="w-40 block mx-auto my-8"
                src="/images/quote.png"
                alt="quote" />

            <div className="w-full flex-center flex-col">
                <h1 className="uppercase font-bold text-lg">aman khanna</h1>
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

                <p className="w-4/6 block mx-auto text-gray-600 text-center my-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quidem exercitationem earum deserunt doloremque illo dolorum enim aliquam. Ad repudiandae accusamus officiis mollitia quia. Quis dolorem aut aliquam quisquam fugiat asperiores ipsum perferendis delectus ullam illo quos consequatur minima animi accusamus possimus a earum id, maiores voluptas. Aperiam, provident doloribus.
                </p>
            </div>

        </div>
    );
}

export default Review;