import Head from 'next/head';
import Navbar from '../../components/Navbar'
import ServicesBox from '../../components/ServicesBox';

const index = () => {

    return (
        <div
            className="container mx-auto dark:bg-slate-900">
            <Head>
                <title>Services - Webnaugth</title>
            </Head>
            <Navbar />

            <main
                className='w-full grid sm:grid-cols-3 grid-cols-1 gap-4 pt-12'>
                <ServicesBox
                    link='/services/webdev_apps'
                    icon='/images/nodejs.png'
                    heading='web and app development'
                    para="
                    Professionally-built websites and iOS and Android mobile applications.
                    " />
                <ServicesBox
                    link='/services/graphic-designing'
                    icon='/images/ai-gd.png'
                    heading='graphic designing'
                    para="
                        Illustrations, icons, and other graphics for your website or app.
                    " />
                <ServicesBox
                    link='/services/seo'
                    size={{ width: '50%' }}
                    icon='/images/seo.png'
                    heading='seo'
                    para="
                    Strategic website optimization for better reach and higher ranking.
                    " />
            </main>

            <div className="mb-6 sm:mb-0">
                <h1 className='font-bold sm:text-3xl text-2xl text-center uppercase mt-16 dark:text-white'>custom requirements??</h1>
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