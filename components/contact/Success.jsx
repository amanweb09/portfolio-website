import { useRouter } from "next/dist/client/router";

const Success = ({ type, setNotification }) => {

    const router = useRouter()

    return (
        <div
            className="w-screen h-screen fixed inset-0 main flex-center">

            <div className="sm:w-96 sm:h-96 w-80 h-80 bg-white rounded-xl relative flex-center flex-col">
                <span
                    onClick={() => { type === 'success' ? router.push('/') : setNotification(false) }}
                    className="text-4xl absolute right-3 top-1 cursor-pointer hover:text-red-500">
                    &times;
                </span>

                {
                    type === 'success' &&
                    <>
                        <img
                            className="sm:w-32 w-24"
                            src="/images/success.png"
                            alt="success" />

                        <h1 className="font-bold sm:text-lg text-base uppercase text-green-500 text-center mt-4">Woohooo! Request saved successfully</h1>
                        <p className="px-6 text-center text-gray-500 mt-2 text-sm">We'll reach you back within a couple of hours ...</p>
                    </>
                }
                {
                    type === 'fail' &&
                    <>
                        <img
                            className="sm:w-32 w-24"
                            src="/images/fail.png"
                            alt="fail" />

                        <h1 className="font-bold sm:text-lg text-base uppercase text-red-500 text-center mt-4">Oh noo! something went wrong</h1>
                        <p className="px-6 text-center text-gray-500 mt-2 text-sm">Please give it another shot ...</p>
                    </>

                }
            </div>
            <style jsx>
                {
                    `
                .main {
                    background: rgb(0,0,0,0.4);
                    z-index: 99
                }
                `
                }
            </style>
        </div>
    );
}

export default Success;