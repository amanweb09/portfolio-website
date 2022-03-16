import { useRouter } from "next/dist/client/router";

const Success = ({ type, setNotification }) => {

    const router = useRouter()

    return (
        <div
            className="w-screen h-screen fixed inset-0 main flex-center">

            <div className="w-96 h-96 bg-white rounded-xl relative flex-center flex-col">
                <span
                    onClick={() => { type === 'success' ? router.push('/') : setNotification(false) }}
                    className="text-4xl absolute right-3 top-1 cursor-pointer hover:text-red-500">
                    &times;
                </span>

                {
                    type === 'success' &&
                    <>
                        <img
                            className="w-32"
                            src="/images/success.png"
                            alt="success" />

                        <h1 className="font-bold text-lg uppercase text-green-500 text-center mt-4">Woohooo! Request saved successfully</h1>
                        <p className="px-6 text-center text-gray-500 mt-2 text-sm">We'll reach you back within a couple of hours ...</p>
                    </>
                }
                {
                    type === 'fail' &&
                    <>
                        <img
                            className="w-24"
                            src="/images/fail.png"
                            alt="fail" />

                        <h1 className="font-bold text-lg uppercase text-red-500 text-center mt-4">Oh noo! something went wrong</h1>
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