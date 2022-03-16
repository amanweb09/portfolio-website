const SocialLinks = () => {
    return (
        <div className="w-full flex-center pb-12 px-4 sm:px-0">
            <div
                onClick={() => window.location.href = 'mailto:amankhanna224466@gmail.com'}
                className="flex-center flex-col cursor-pointer mx-4 hover neu p-2 w-32 h-32 rounded-xl">
                <img
                    className="w-16"
                    src="/images/email.png"
                    alt="mail" />
                <h1 className="mt-2 font-bold uppercase text-center sm:text-base text-sm link">Mail us</h1>
            </div>

            <div
                onClick={() => window.location.href = 'https://wa.me/919818267849'}
                className="flex-center flex-col cursor-pointer sm:mx-20 mx-4 hover neu p-2 w-32 h-32 rounded-xl">
                <img
                    className="sm:w-16 w-12"
                    src="/images/whatsapp.png"
                    alt="whatsapp" />
                <h1 className="mt-2 font-bold uppercase text-center sm:text-base text-sm">chat on Whatsapp</h1>
            </div>
            {/* <div className="flex-center flex-col cursor-pointer hover neu p-2 w-32 h-32 rounded-xl">
                <img
                    className="sm:w-16 w-12"
                    src="/images/telegram.png"
                    alt="mail" />
                <h1 className="mt-2 font-bold uppercase text-center sm:text-base text-sm">telegram</h1>
            </div> */}

            <style jsx>
                {
                    `
                    .hover:hover {
                        transition: 0.3s;
                        transform: scale(1.02)
                    }
                    .link {
                        width: 4rem;
                    }
                    .neu {
                        background: #ffffff;
                        box-shadow:  26px 26px 51px #c7c7c7, -26px -26px 51px #ffffff;
                    }
                    @media only screen and (max-width: 450px) {
                        width: 2.5rem
                    }
                    `
                }
            </style>
        </div>
    );
}

export default SocialLinks;