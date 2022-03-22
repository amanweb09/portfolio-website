import axios from "axios";
import { useState } from "react";

const NewsLetter = () => {

    const [email, setEmail] = useState("")
    const [flash, setFlash] = useState({
        state: false,
        type: "",
        text: ""
    })

    async function saveRequest() {

        if (email === "") return;

        try {
            await axios.post(`${process.env.NEXT_PUBLIC_DB_URL}/contactMe.json`, { email }, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            })

            setFlash({ state: true, type: 'success', text: 'Request saved successfully!' })
            setEmail("")

        } catch (error) {
            console.log(error);
            setFlash({ state: true, type: 'error', text: 'Something went wrong!' })
        }
    }

    return (
        <div
            className="w-full mt-6 sm:px-0 px-2 wrapper">
            <h1 className="font-bold my-4 text-xl dark:text-gray-200">Drop your email, we'll contact you</h1>
            {
                flash.state === true ?
                    flash.type === 'success' ?
                        <h1 className="text-green-500 font-bold my-4">{flash.text}</h1>
                        :
                        flash.type === 'error' ?
                            <h1 className="text-red-500 font-bold my-4">{flash.text}</h1>
                            : <></> : <></>
            }

            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderBottom: '1px solid' }}
                className="sm:w-8/12 w-10/12 h-10 mt-6 dark:bg-transparent dark:text-gray-200 border-black dark:border-white"
                placeholder="Drop your email here..."
                type="email" />

            <button
                onClick={saveRequest}
                className="w-48 h-10 block mx-auto dark:bg-gray-100 dark:text-black bg-black text-white font-bold mt-10">
                Submit
            </button>

            <style jsx>
                {
                    `
                .wrapper {
                    height: 40vh;
                    border-yop: 1px solid #dcdcdc;
                }
                input {
                    outline: none;
                }
                input:focus {
                    border-bottom: 2px solid hotpink;
                }
                @media only screen and (max-width: 450px) {
                    height: 30vh;
                }
            `
                }
            </style>
        </div>
    );
}

export default NewsLetter;