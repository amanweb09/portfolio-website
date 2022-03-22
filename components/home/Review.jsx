import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Review = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <div className='container mx-auto py-8'>
            <h1 className='uppercase font-bold text-xl sm:ml-0 ml-2 dark:text-white'>what do clients say</h1>

            <img
                className="sm:w-40 w-24 block mx-auto my-8"
                src="/images/quote.png"
                alt="quote" />
            <Slider {...settings}>
                <ReviewCard
                    name="aman khanna"
                    stars={5}
                    review="
                            Professional service. I got my website built and got the website much above my expectations!
                         " />
                <ReviewCard
                    name="eesh chadha"
                    stars={4}
                    review="
                            One of the best in the business. Was really impressed with the professionalism. Got my website at the best cost and in a very quick time frame.
                            The customer support is also very quick.
                         " />

                <ReviewCard
                    name="ansh takyar"
                    stars={4}
                    review="
                            Got my business' website built from webmon. They're extremely professional and efficient.
                         " />

            </Slider>

            <style jsx>
                {
                    `
                        
                    `
                }
            </style>
        </div>
    );
}

const ReviewCard = props => {

    const stars = new Array(props.stars).fill("")

    return (
        <div className="w-full flex-center flex-col">
            <h1 className="uppercase font-bold text-lg dark:text-white">{props.name}</h1>
            <div className="flex-center">
                {
                    stars.map((star, index) => {
                        return <img
                            key={index}
                            className="w-8"
                            src="/images/star.png"
                            alt="star" />
                    })
                }
                {/* <img
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
                    alt="star" /> */}
            </div>

            <p className="sm:w-4/6 dark:text-gray-200 w-full px-4 sm:px-0 block mx-auto text-gray-600 text-center my-4">
                {props.review}
            </p>
        </div>
    )
}

export default Review;