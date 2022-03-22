import Link from 'next/link'

const MobileApp = () => {
    return (
        <>
            <div className="w-full pt-20 pb-6">
                <img
                    className="sm:h-40 h-28 mx-auto block"
                    src="/images/app-store.png"
                    alt="apps" />

                <h1 className="text-center font-bold sm:text-4xl text-3xl uppercase mt-8 next dark:text-white">mobile app development</h1>

                <p className="text-center text-gray-500 dark:text-gray-200 mt-2 sm:px-12 px-6 text-sm sm:text-base">
                    Cross-platform mobile application development that makes your app compatible with both iOS and
                    Android. In short, you get the power of two in a single application! We develop the most amazing-looking
                    mobile applications so all you focus is on counting money and leave the rest on us!
                </p>

                <Link href="/"><a className="mx-auto dark:text-white block w-max font-bold uppercase mt-6 hover:text-purple-500">
                    inquire <span>&rsaquo;</span>
                </a></Link>
            </div>

            <div className="w-full h-4 mt-6 bg-gray-200 block dark:bg-slate-600"></div>

            <div className="w-full sm:pt-20 pt-10 pb-6">
                <img
                    className="sm:h-32 h-24 mx-auto block"
                    src="/images/restful.png"
                    alt="rest api" />

                <h1 className="text-center font-bold sm:text-4xl text-3xl uppercase mt-8 next dark:text-white">restful api</h1>

                <p className="text-center text-gray-500 dark:text-gray-300 sm:text-base text-sm mt-2 sm:px-12 px-6">
                    Need a server to power your website or app? Here we're to help you out! Our servers are focus around
                    performance and scalability so that you can power your website and app with a single server without 
                    worrying about load handling and client-side framework.
                </p>

                <Link href="/"><a className="text-white mx-auto block w-max font-bold uppercase mt-6 hover:text-purple-500">
                    inquire <span>&rsaquo;</span>
                </a></Link>
            </div>

            <div className="w-full h-4 mt-6 bg-gray-200 block dark:bg-slate-600"></div>

            <div className="w-full sm:pt-20 pt-10 pb-6">
                <img
                    className="sm:h-48 h-40 mx-auto block"
                    src="/images/management.png"
                    alt="management" />

                <h1 className="text-center dark:text-white font-bold sm:text-4xl text-3xl uppercase mt-8 next">website management</h1>

                <p className="text-center dark:text-gray-300 text-gray-500 mt-2 sm:px-12 px-6 sm:text-base text-sm">
                    We're extremely efficient in managing websites, irrespective of the type. You can rely on us 
                    for adding features, bug fixing, uploading content, database-related issues, deployment, and much more 
                    and we'll handle everything with gratitude!
                </p>

                <Link href="/"><a className="text-white mx-auto block w-max font-bold uppercase mt-6 hover:text-purple-500">
                    inquire <span>&rsaquo;</span>
                </a></Link>
            </div>

            <div className="w-full h-4 mt-6 bg-gray-200 block dark:bg-slate-600"></div>

        </>
    );
}

export default MobileApp;