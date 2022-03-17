import { useEffect } from 'react'
import Navbar from "../../components/Navbar";
import Head from 'next/head'
import Footer from "../../components/home/Footer";
import Features from "../../components/webapps/Features";
import MobileApp from "../../components/webapps/MobileApp";
import Next from "../../components/webapps/Next";
import React from "../../components/webapps/React";
import AOS from 'aos'

const WebApps = () => {
    useEffect(() => {
        AOS.init({
            delay: 0,
            duration: 400,
            easing: 'ease'
        })
    }, [])
    return (
        <div className="container mx-auto">
            <Head>
                <title>Web and development - Webnaught</title>
            </Head>
            <Navbar />

            <section className="sm:mt-6 mt-12 sm:mb-6 mb-8">
                <img
                    data-aos="flip-up"
                    className="sm:w-4/6 w-5/6 block mx-auto"
                    src="/images/website-mockup.png"
                    alt="mockup" />

                <h1 className="text-center font-bold uppercase sm:text-2xl text-xl mt-4">responsive websites</h1>
                <p className="text-gray-600 text-center font-semibold sm:text-sm text-xs px-6 sm:py-2 py-0 sm:mt-0 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni necessitatibus voluptate culpa ut corrupti quasi ratione magnam obcaecati animi suscipit, sapiente repudiandae atque consectetur libero repellendus laboriosam ducimus saepe provident excepturi, officia doloremque accusantium voluptas aspernatur! Necessitatibus cum quisquam omnis. Aspernatur nostrum neque excepturi dicta ea at, enim pariatur eius!
                </p>
            </section>

            <Features />

            <React />

            <Next />

            <MobileApp />

            <div className="my-16">
                <h1 className='font-bold sm:text-3xl text-2xl text-center uppercase'>custom requirements??</h1>
                <button
                    style={{
                        background: "linear-gradient(90deg, #FFE600 2.33%, #D7A803 94.13%)"
                    }}
                    className='w-64 block mx-auto mt-4 h-10 font-bold uppercase'>get in touch</button>
            </div>

            <Footer />
        </div>
    );
}


export default WebApps;