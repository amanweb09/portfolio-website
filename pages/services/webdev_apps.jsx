import Navbar from "../../components/Navbar";
import Features from "../../components/webapps/Features";
import Next from "../../components/webapps/Next";
import React from "../../components/webapps/React";

const WebApps = () => {
    return (
        <div className="container mx-auto">
            <Navbar />

            <section className="my-6">
                <img
                    className="w-4/6 block mx-auto"
                    src="/images/website-mockup.png"
                    alt="mockup" />

                <h1 className="text-center font-bold uppercase text-2xl mt-4">responsive dynamic websites</h1>
                <p className="text-gray-600 text-center font-semibold text-sm px-6 py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni necessitatibus voluptate culpa ut corrupti quasi ratione magnam obcaecati animi suscipit, sapiente repudiandae atque consectetur libero repellendus laboriosam ducimus saepe provident excepturi, officia doloremque accusantium voluptas aspernatur! Necessitatibus cum quisquam omnis. Aspernatur nostrum neque excepturi dicta ea at, enim pariatur eius!
                </p>
            </section>

            <Features />

            <React />

            <Next />
        </div>
    );
}


export default WebApps;