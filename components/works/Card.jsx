const Card = ({title, subTitle, image}) => {
    return (
        <div className="h-screen wrapper">
            <h1 className="sm:text-6xl text-4xl font-bold uppercase text-white pt-20 pl-4">{title}</h1>
            <h4 className="uppercase font-semibold text-gray-200 text-xl pl-4 mt-6">{subTitle}</h4>

            <style jsx>
                {
                    `
                       .wrapper {
                           background: linear-gradient(135deg, rgb(0,0,0,0.95), rgb(0,0,0,0.1)), url(${image}) no-repeat center;
                           background-size: 100% 100%;
                       }
                    `
                }
            </style>
        </div>
    );
}

export default Card;