const Card = ({ title, subTitle, image }) => {
    return (
        <>
            <section className='w-full'>
                <img
                    className='block mx-auto sm:w-3/6 w-4/6 shadow-xl mt-20 rounded-lg'
                    src={image}
                    alt="website" />

                <h1 className='mt-10 font-bold text-center uppercase sm:text-5xl text-3xl dark:text-white'>{title}</h1>
                <h4 className='text-center text-gray-500 uppercase sm:text-xl text-lg dark:text-gray-200'>{subTitle}</h4>
            </section>

            <div className="w-full h-4 mt-6 bg-gray-200 dark:bg-slate-600 block"></div>
        </>
    );
}

export default Card;