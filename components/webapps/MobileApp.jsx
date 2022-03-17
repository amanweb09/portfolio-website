import Link from 'next/link'

const MobileApp = () => {
    return (
        <>
        <div className="w-full pt-20 pb-6">
            <img
                className="sm:h-40 h-28 mx-auto block"
                src="/images/app-store.png"
                alt="apps" />

            <h1 className="text-center font-bold sm:text-4xl text-3xl uppercase mt-8 next">mobile app development</h1>

            <p className="text-center text-gray-500 mt-2 sm:px-12 px-6 text-sm sm:text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus adipisci, quos ullam quasi cumque ad veritatis! Praesentium, dolor laboriosam? Corrupti accusamus ea recusandae, laborum delectus blanditiis ducimus sit itaque, numquam id temporibus. Cum deserunt dolorum fugiat. Aut dolor vitae, labore, et deserunt facilis voluptate, doloribus nulla quisquam nostrum distinctio possimus.
            </p>

            <Link href="/"><a className="mx-auto block w-max font-bold uppercase mt-6 hover:text-purple-500">
                inquire <span>&rsaquo;</span>
            </a></Link>
        </div>

        <div className="w-full sm:pt-20 pt-10 pb-6">
            <img
                className="sm:h-32 h-24 mx-auto block"
                src="/images/restful.png"
                alt="rest api" />

            <h1 className="text-center font-bold sm:text-4xl text-3xl uppercase mt-8 next">restful api</h1>

            <p className="text-center text-gray-500 sm:text-base text-sm mt-2 sm:px-12 px-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus adipisci, quos ullam quasi cumque ad veritatis! Praesentium, dolor laboriosam? Corrupti accusamus ea recusandae, laborum delectus blanditiis ducimus sit itaque, numquam id temporibus. Cum deserunt dolorum fugiat. Aut dolor vitae, labore, et deserunt facilis voluptate, doloribus nulla quisquam nostrum distinctio possimus.
            </p>

            <Link href="/"><a className="mx-auto block w-max font-bold uppercase mt-6 hover:text-purple-500">
                inquire <span>&rsaquo;</span>
            </a></Link>
        </div>

        <div className="w-full sm:pt-20 pt-10 pb-6">
            <img
                className="sm:h-48 h-40 mx-auto block"
                src="/images/management.png"
                alt="management" />

            <h1 className="text-center font-bold sm:text-4xl text-3xl uppercase mt-8 next">website management</h1>

            <p className="text-center text-gray-500 mt-2 sm:px-12 px-6 sm:text-base text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus adipisci, quos ullam quasi cumque ad veritatis! Praesentium, dolor laboriosam? Corrupti accusamus ea recusandae, laborum delectus blanditiis ducimus sit itaque, numquam id temporibus. Cum deserunt dolorum fugiat. Aut dolor vitae, labore, et deserunt facilis voluptate, doloribus nulla quisquam nostrum distinctio possimus.
            </p>

            <Link href="/"><a className="mx-auto block w-max font-bold uppercase mt-6 hover:text-purple-500">
                inquire <span>&rsaquo;</span>
            </a></Link>
        </div>
        
        </>
    );
}

export default MobileApp;