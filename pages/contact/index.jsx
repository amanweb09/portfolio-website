import { useState } from "react";
import axios from 'axios'
import Head from "next/head";
import SocialLinks from "../../components/contact/SocialLinks";
import Navbar from '../../components/Navbar'
import { useRouter } from 'next/router'
import Success from "../../components/contact/Success";

const index = () => {

    const router = useRouter()

    const [user, setUser] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [notification, setNotification] = useState(false)
    const [notificationType, setNotificationType] = useState('')

    function setInfo(name, value) {
        setUser({
            ...user,
            [name]: value
        })
    }

    async function submitForm() {
        if (user.name === "" || user.email === "" || user.message === "") {
            alert('Please fill the required fields!')
            return;
        }

        try {
            await axios.post(`${process.env.NEXT_PUBLIC_DB_URL}/contacts.json`, user, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            })
            setNotificationType('success')
            setNotification(true)
            setUser({
                name: "",
                email: "",
                message: ""
            })

        } catch (error) {
            console.log(error);
            setNotification(true)
            setNotificationType('error')
        }
    }

    return (
        <div className="container mx-auto">
            {
                notification ?
                    notificationType === 'success' ?
                        <Success type="success" setNotification={setNotification} />
                        :
                        notificationType === 'error' ?
                            <Success type="fail" setNotification={setNotification} />
                            : <></> : <></>
            }
            <Head>
                <title>Get in touch - WebNaught</title>
            </Head>
            <Navbar />

            <h1 className="sm:text-6xl text-3xl font-bold text-center mt-24 mb-24 uppercase heading">get in touch</h1>

            <SocialLinks />

            <h1 className="text-2xl font-bold text-center mb-14 heading">OR</h1>

            <label htmlFor="name" className="font-semibold block uppercase w-max mx-auto">
                name <span className="text-red-500">*</span>
            </label>

            <input
                name="name"
                value={user.name}
                onChange={(e) => setInfo(e.target.name, e.target.value)}
                type="text"
                className="sm:w-10/12 w-11/12 h-12 input rounded-lg px-2 block mx-auto"
                placeholder="Drop your name here ..." />


            <label htmlFor="email" className="font-semibold block uppercase mt-8 w-max mx-auto">
                Email <span className="text-red-500">*</span>
            </label>

            <input
                name="email"
                value={user.email}
                onChange={(e) => setInfo(e.target.name, e.target.value)}
                type="email"
                className="sm:w-10/12 w-11/12 h-12 input rounded-lg px-2 block mx-auto"
                placeholder="Drop your email here ..." />

            <label htmlFor="message" className="font-semibold block uppercase mt-8 w-max mx-auto">
                Brief us about your requirements <span className="text-red-500">*</span>
            </label>

            <textarea
                value={user.message}
                onChange={(e) => setInfo(e.target.name, e.target.value)}
                placeholder="Drop your requirements here ..."
                name="message"
                id="message"
                className="input sm:w-10/12 w-11/12 block mx-auto h-56 rounded-lg p-4" />

            <button
                onClick={submitForm}
                className="btn w-64 h-12 font-bold text-white mt-12 mb-6 block mx-auto">
                SUBMIT
            </button>

            <style jsx>
                {
                    `
                .heading {
                    background: linear-gradient(89.82deg, #CF1512 23.02%, #AE00A7 68.17%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-fill-color: transparent;
                }
                .input {
                    background: #FFFFFF;
                    box-shadow: inset 4px 4px 25px 1px rgba(0, 0, 0, 0.25);
                }
                .btn {
                    background: linear-gradient(89.82deg, #CF1512 23.02%, #AE00A7 68.17%)
                }
               
            `
                }
            </style>
        </div>
    );
}

export default index;