// import { useEffect, useContext } from 'react';
import Navbar from '../../components/Navbar'
import ServicesBox from '../../components/ServicesBox';
// import { navlinkContext } from '../../context/navlinks';

const index = () => {

    // const { setActiveLink } = useContext(navlinkContext)

    // useEffect(() => {
    //     setActiveLink('services') 
    // }, [])
    return (
        <div
            className="container mx-auto">
            <Navbar />

            <main
                className='w-full grid sm:grid-cols-3 grid-cols-1 gap-4 pt-12'>
                <ServicesBox
                    link='/services/webdev_apps'
                    icon='/images/nodejs.png'
                    heading='web and app development'
                    para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vel libero illo qui quae harum molestiae fugit maiores inventore labore." />
                <ServicesBox
                    link='/services/graphic_designing'
                    icon='/images/ai-gd.png'
                    heading='graphic designing'
                    para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vel libero illo qui quae harum molestiae fugit maiores inventore labore." />
                <ServicesBox
                    link='/services/seo'
                    size={{ width: '50%' }}
                    icon='/images/seo.png'
                    heading='seo'
                    para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vel libero illo qui quae harum molestiae fugit maiores inventore labore." />
            </main>

            <div>
                <h1 className='font-bold sm:text-3xl text-2xl text-center uppercase mt-16'>custom requirements??</h1>
                <button
                    style={{
                        background: "linear-gradient(90deg, #FFE600 2.33%, #D7A803 94.13%)"
                    }}
                    className='w-64 block mx-auto mt-4 h-10 font-bold uppercase'>get in touch</button>
            </div>

            <style jsx>
                {
                    `
                .container {
                    min-height: 88vh;
                }
            `
                }
            </style>
        </div>
    );
}

export default index;